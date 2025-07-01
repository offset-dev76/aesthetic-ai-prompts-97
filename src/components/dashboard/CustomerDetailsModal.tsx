
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

interface Customer {
  customer_email: string;
  customer_name: string;
  customer_phone: string;
  total_orders: number;
  total_spent: number;
  last_order_date: string;
}

interface CustomerOrder {
  id: string;
  total_amount: number;
  status: string;
  created_at: string;
  shipping_city: string;
  shipping_state: string;
}

interface CustomerDetailsModalProps {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerDetailsModal = ({ customer, isOpen, onClose }: CustomerDetailsModalProps) => {
  const { data: customerOrders, isLoading } = useQuery({
    queryKey: ['customer-orders', customer.customer_email],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('id, total_amount, status, created_at, shipping_city, shipping_state')
        .eq('customer_email', customer.customer_email)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as CustomerOrder[];
    },
    enabled: isOpen
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      processing: { color: "bg-blue-100 text-blue-800", label: "Processing" },
      shipped: { color: "bg-purple-100 text-purple-800", label: "Shipped" },
      delivered: { color: "bg-green-100 text-green-800", label: "Delivered" },
      cancelled: { color: "bg-red-100 text-red-800", label: "Cancelled" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Customer Details - {customer.customer_name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Name:</span> {customer.customer_name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {customer.customer_email}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {customer.customer_phone}
              </div>
            </CardContent>
          </Card>

          {/* Customer Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="font-medium">Total Orders:</span> {customer.total_orders}
              </div>
              <div>
                <span className="font-medium">Total Spent:</span> ₹{customer.total_spent}
              </div>
              <div>
                <span className="font-medium">Average Order:</span> ₹{Math.round(customer.total_spent / customer.total_orders)}
              </div>
              <div>
                <span className="font-medium">Last Order:</span> {new Date(customer.last_order_date).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Order History</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customerOrders?.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-xs">
                        {order.id.slice(0, 8)}...
                      </TableCell>
                      <TableCell className="font-medium">₹{order.total_amount}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.shipping_city}, {order.shipping_state}</TableCell>
                      <TableCell>
                        {new Date(order.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
