
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { CustomerDetailsModal } from "./CustomerDetailsModal";

interface Customer {
  customer_email: string;
  customer_name: string;
  customer_phone: string;
  total_orders: number;
  total_spent: number;
  last_order_date: string;
}

export const CustomersSection = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: customers, isLoading } = useQuery({
    queryKey: ['customers', searchTerm],
    queryFn: async () => {
      let query = supabase
        .from('orders')
        .select('customer_email, customer_name, customer_phone, total_amount, created_at');

      const { data, error } = await query;
      if (error) throw error;

      // Group by customer email and aggregate data
      const customerMap = new Map<string, Customer>();

      data?.forEach((order) => {
        const email = order.customer_email;
        if (customerMap.has(email)) {
          const customer = customerMap.get(email)!;
          customer.total_orders++;
          customer.total_spent += order.total_amount;
          if (new Date(order.created_at) > new Date(customer.last_order_date)) {
            customer.last_order_date = order.created_at;
          }
        } else {
          customerMap.set(email, {
            customer_email: email,
            customer_name: order.customer_name,
            customer_phone: order.customer_phone,
            total_orders: 1,
            total_spent: order.total_amount,
            last_order_date: order.created_at
          });
        }
      });

      let customers = Array.from(customerMap.values());

      // Filter by search term
      if (searchTerm) {
        customers = customers.filter(customer =>
          customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.customer_email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return customers.sort((a, b) => b.total_spent - a.total_spent);
    }
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Customer Management</CardTitle>
          <div className="w-72">
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers?.map((customer) => (
                <TableRow key={customer.customer_email}>
                  <TableCell className="font-medium">{customer.customer_name}</TableCell>
                  <TableCell>{customer.customer_email}</TableCell>
                  <TableCell>{customer.customer_phone}</TableCell>
                  <TableCell>{customer.total_orders}</TableCell>
                  <TableCell className="font-medium">₹{customer.total_spent}</TableCell>
                  <TableCell>
                    {new Date(customer.last_order_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCustomer(customer)}
                    >
                      View Orders
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedCustomer && (
        <CustomerDetailsModal
          customer={selectedCustomer}
          isOpen={!!selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </>
  );
};
