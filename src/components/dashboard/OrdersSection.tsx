import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { OrderDetailsModal } from "./OrderDetailsModal";
interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  shipping_city: string;
  shipping_state: string;
  shipping_pincode: string;
  total_amount: number;
  status: string;
  created_at: string;
}
export const OrdersSection = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const queryClient = useQueryClient();
  const {
    data: orders,
    isLoading
  } = useQuery({
    queryKey: ['orders', statusFilter],
    queryFn: async () => {
      let query = supabase.from('orders').select('*').order('created_at', {
        ascending: false
      });
      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }
      const {
        data,
        error
      } = await query;
      if (error) throw error;
      return data as Order[];
    }
  });
  const updateStatusMutation = useMutation({
    mutationFn: async ({
      orderId,
      status
    }: {
      orderId: string;
      status: string;
    }) => {
      const {
        error
      } = await supabase.from('orders').update({
        status,
        updated_at: new Date().toISOString()
      }).eq('id', orderId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders']
      });
      queryClient.invalidateQueries({
        queryKey: ['dashboard-stats']
      });
      toast({
        title: "Success",
        description: "Order status updated successfully"
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update order status",
        variant: "destructive"
      });
    }
  });
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: {
        color: "bg-yellow-100 text-yellow-800",
        label: "Pending"
      },
      processing: {
        color: "bg-blue-100 text-blue-800",
        label: "Processing"
      },
      shipped: {
        color: "bg-purple-100 text-purple-800",
        label: "Shipped"
      },
      delivered: {
        color: "bg-green-100 text-green-800",
        label: "Delivered"
      },
      cancelled: {
        color: "bg-red-100 text-red-800",
        label: "Cancelled"
      }
    };
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };
  const handleStatusChange = (orderId: string, newStatus: string) => {
    updateStatusMutation.mutate({
      orderId,
      status: newStatus
    });
  };
  if (isLoading) {
    return <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>)}
          </div>
        </CardContent>
      </Card>;
  }
  return <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between bg-zinc-50">
          <CardTitle>Orders Management</CardTitle>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="bg-zinc-50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders?.map(order => <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">
                    {order.id.slice(0, 8)}...
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer_name}</div>
                      <div className="text-sm text-ash">{order.customer_email}</div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">₹{order.total_amount}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    {new Date(order.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                        View Details
                      </Button>
                      <Select value={order.status} onValueChange={value => handleStatusChange(order.id, value)}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedOrder && <OrderDetailsModal order={selectedOrder} isOpen={!!selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </>;
};
