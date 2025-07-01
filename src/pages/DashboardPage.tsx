
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrdersSection } from "@/components/dashboard/OrdersSection";
import { CustomersSection } from "@/components/dashboard/CustomersSection";
import { StatsSection } from "@/components/dashboard/StatsSection";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-linen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal mb-2">Dashboard</h1>
          <p className="text-ash">Monitor orders, customers, and business metrics</p>
        </div>

        <StatsSection />

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <OrdersSection />
          </TabsContent>

          <TabsContent value="customers">
            <CustomersSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
