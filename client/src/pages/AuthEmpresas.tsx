import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

const AuthEmpresas = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: any) => {
      return apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
    },
    onSuccess: (data) => {
      toast({ title: "¡Bienvenido!", description: "Sesión iniciada correctamente" });
      if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
      setTimeout(() => window.location.replace('/portal-empresas'), 1000);
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const registerMutation = useMutation({
    mutationFn: async (values: any) => {
      return apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ ...values, role: 'empresa' }),
      });
    },
    onSuccess: (data) => {
      toast({ title: "Cuenta creada", description: "Empresa registrada exitosamente" });
      if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
      setTimeout(() => window.location.replace('/portal-empresas'), 1000);
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: 'login' | 'register') => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (type === 'login') loginMutation.mutate(formData);
    else registerMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-[#0a1a0a] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/5 border-white/10 text-white backdrop-blur-md">
        <CardHeader className="text-center">
          <Building2 className="w-12 h-12 text-[#cad95e] mx-auto mb-2" />
          <CardTitle className="text-2xl font-gasoek">Portal Empresas</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Ingresar</TabsTrigger>
              <TabsTrigger value="register">Registrar</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
                <div className="space-y-2">
                  <Label>Email Corporativo</Label>
                  <Input name="email" type="email" required className="bg-white/10 border-white/20" />
                </div>
                <div className="space-y-2">
                  <Label>Contraseña</Label>
                  <Input name="password" type="password" required className="bg-white/10 border-white/20" />
                </div>
                <Button type="submit" className="w-full bg-[#cad95e] text-black hover:bg-[#b8c74d]" disabled={loginMutation.isPending}>
                  {loginMutation.isPending ? "Ingresando..." : "Iniciar Sesión"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nombre</Label>
                    <Input name="firstName" required className="bg-white/10 border-white/20" />
                  </div>
                  <div className="space-y-2">
                    <Label>Apellido</Label>
                    <Input name="lastName" required className="bg-white/10 border-white/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input name="email" type="email" required className="bg-white/10 border-white/20" />
                </div>
                <div className="space-y-2">
                  <Label>Contraseña</Label>
                  <Input name="password" type="password" required className="bg-white/10 border-white/20" />
                </div>
                <Button type="submit" className="w-full bg-[#cad95e] text-black hover:bg-[#b8c74d]" disabled={registerMutation.isPending}>
                  {registerMutation.isPending ? "Registrando..." : "Crear Cuenta de Empresa"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthEmpresas;