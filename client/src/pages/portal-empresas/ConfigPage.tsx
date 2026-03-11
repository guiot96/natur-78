import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  Settings, Bell, Shield, Eye, Globe, Smartphone, 
  Save, Key, LogOut, Trash2, Download, Upload,
  User, Building2, Mail, MapPin, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ConfigPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const { signOut } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch current user
  const { data: currentUser } = useQuery({
    queryKey: ['/api/auth/me'],
    staleTime: 10 * 60 * 1000,
  }) as { data: any };

  // Form states for different sections
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
    website: "",
    city: "",
    country: "",
    address: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    messageNotifications: true,
    experienceUpdates: true,
    marketingEmails: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showContactInfo: true,
    showLocation: true,
    allowMessages: true,
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('/api/auth/update-profile', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/me'] });
      toast({
        title: "Perfil actualizado",
        description: "Los cambios se han guardado correctamente.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudieron guardar los cambios.",
        variant: "destructive",
      });
    }
  });

  // Load user data into form when available
  useEffect(() => {
    if (currentUser) {
      setProfileData({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        companyName: currentUser.companyName || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        description: currentUser.companyDescription || currentUser.bio || "",
        website: currentUser.website || "",
        city: currentUser.city || "",
        country: currentUser.country || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser]);

  const sections = [
    { id: "profile", label: "Perfil", icon: User },
    { id: "business", label: "Empresa", icon: Building2 },
    { id: "notifications", label: "Notificaciones", icon: Bell },
    { id: "privacy", label: "Privacidad", icon: Shield },
    { id: "account", label: "Cuenta", icon: Settings },
  ];

  const handleSaveProfile = () => {
    const { description, ...rest } = profileData;
    updateProfileMutation.mutate({ ...rest, companyDescription: description, bio: description });
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Información Personal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-white/80">Nombre</Label>
            <Input
              id="firstName"
              value={profileData.firstName}
              onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              data-testid="input-first-name"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-white/80">Apellido</Label>
            <Input
              id="lastName"
              value={profileData.lastName}
              onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              data-testid="input-last-name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-white/80">Email</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              data-testid="input-email"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white/80">Teléfono</Label>
            <Input
              id="phone"
              value={profileData.phone}
              onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              data-testid="input-phone"
            />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="description" className="text-white/80">Descripción</Label>
        <Textarea
          id="description"
          value={profileData.description}
          onChange={(e) => setProfileData(prev => ({ ...prev, description: e.target.value }))}
          className="bg-white/10 border-white/20 text-white"
          rows={4}
          data-testid="textarea-description"
        />
      </div>

      <div>
        <h3 className="text-base font-semibold text-white/90 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-400" />
          Ubicación
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="address" className="text-white/80">Dirección</Label>
            <Input
              id="address"
              value={profileData.address}
              onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Calle 59 #6-21, Chapinero"
              data-testid="input-address"
            />
          </div>
          <div>
            <Label htmlFor="city" className="text-white/80">Ciudad</Label>
            <Input
              id="city"
              value={profileData.city}
              onChange={(e) => setProfileData(prev => ({ ...prev, city: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Bogotá"
              data-testid="input-city"
            />
          </div>
          <div>
            <Label htmlFor="country" className="text-white/80">País</Label>
            <Input
              id="country"
              value={profileData.country}
              onChange={(e) => setProfileData(prev => ({ ...prev, country: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              placeholder="Colombia"
              data-testid="input-country"
            />
          </div>
        </div>
      </div>

      <Button 
        onClick={handleSaveProfile}
        disabled={updateProfileMutation.isPending}
        className="bg-green-600/80 hover:bg-green-600 text-white"
        data-testid="button-save-profile"
      >
        <Save className="w-4 h-4 mr-2" />
        {updateProfileMutation.isPending ? "Guardando..." : "Guardar Cambios"}
      </Button>
    </div>
  );

  const renderBusinessSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Información de la Empresa</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="companyName" className="text-white/80">Nombre de la Empresa</Label>
            <Input
              id="companyName"
              value={profileData.companyName}
              onChange={(e) => setProfileData(prev => ({ ...prev, companyName: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              data-testid="input-company-name"
            />
          </div>
          <div>
            <Label htmlFor="website" className="text-white/80">Sitio Web</Label>
            <Input
              id="website"
              type="url"
              value={profileData.website}
              onChange={(e) => setProfileData(prev => ({ ...prev, website: e.target.value }))}
              className="bg-white/10 border-white/20 text-white"
              placeholder="https://ejemplo.com"
              data-testid="input-website"
            />
          </div>
        </div>
      </div>

      <Button 
        onClick={handleSaveProfile}
        disabled={updateProfileMutation.isPending}
        className="bg-green-600/80 hover:bg-green-600 text-white"
        data-testid="button-save-business"
      >
        <Save className="w-4 h-4 mr-2" />
        Guardar Cambios
      </Button>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white mb-4">Preferencias de Notificación</h3>
      
      <div className="space-y-4">
        {[
          { key: "emailNotifications", label: "Notificaciones por email", description: "Recibir notificaciones importantes por correo" },
          { key: "pushNotifications", label: "Notificaciones push", description: "Notificaciones en tiempo real en el navegador" },
          { key: "messageNotifications", label: "Nuevos mensajes", description: "Notificar cuando recibas nuevos mensajes" },
          { key: "experienceUpdates", label: "Actualizaciones de experiencias", description: "Notificar sobre cambios en experiencias" },
          { key: "marketingEmails", label: "Emails de marketing", description: "Recibir promociones y novedades" },
        ].map((setting) => (
          <div key={setting.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-white font-medium">{setting.label}</h4>
              <p className="text-white/60 text-sm">{setting.description}</p>
            </div>
            <Switch
              checked={notificationSettings[setting.key as keyof typeof notificationSettings]}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, [setting.key]: checked }))
              }
              data-testid={`switch-${setting.key}`}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white mb-4">Configuración de Privacidad</h3>
      
      <div className="space-y-4">
        {[
          { key: "showContactInfo", label: "Mostrar información de contacto", description: "Permitir que otros vean tu email y teléfono" },
          { key: "showLocation", label: "Mostrar ubicación", description: "Mostrar tu ciudad y país en el perfil" },
          { key: "allowMessages", label: "Permitir mensajes", description: "Permitir que otros usuarios te envíen mensajes" },
        ].map((setting) => (
          <div key={setting.key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-white font-medium">{setting.label}</h4>
              <p className="text-white/60 text-sm">{setting.description}</p>
            </div>
            <Switch
              checked={privacySettings[setting.key as keyof typeof privacySettings]}
              onCheckedChange={(checked) => 
                setPrivacySettings(prev => ({ ...prev, [setting.key]: checked }))
              }
              data-testid={`switch-${setting.key}`}
            />
          </div>
        ))}
      </div>

      <div className="p-4 bg-yellow-600/10 border border-yellow-500/20 rounded-lg">
        <h4 className="text-yellow-400 font-medium mb-2">Visibilidad del Perfil</h4>
        <p className="text-white/70 text-sm mb-3">Controla quién puede ver tu perfil completo</p>
        <div className="space-y-2">
          {[
            { value: "public", label: "Público - Visible para todos" },
            { value: "network", label: "Red - Solo mi red de contactos" },
            { value: "private", label: "Privado - Solo yo" },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="profileVisibility"
                value={option.value}
                checked={privacySettings.profileVisibility === option.value}
                onChange={(e) => setPrivacySettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                className="text-green-500"
              />
              <span className="text-white/80 text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAccountSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white mb-4">Configuración de Cuenta</h3>
      
      <div className="space-y-4">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Cambiar Contraseña</h4>
                <p className="text-white/60 text-sm">Actualiza tu contraseña por seguridad</p>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Key className="w-4 h-4 mr-2" />
                Cambiar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Exportar Datos</h4>
                <p className="text-white/60 text-sm">Descarga una copia de tus datos</p>
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator className="bg-white/20" />

        <Card className="bg-red-600/10 border-red-500/20">
          <CardContent className="p-4">
            <h4 className="text-red-400 font-medium mb-2">Zona de Peligro</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Cerrar Sesión</p>
                  <p className="text-white/60 text-sm">Cerrar sesión en este dispositivo</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={signOut}
                  className="bg-orange-600/20 border-orange-500/30 text-orange-400 hover:bg-orange-600/30"
                  data-testid="button-sign-out"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Eliminar Cuenta</p>
                  <p className="text-white/60 text-sm">Elimina permanentemente tu cuenta</p>
                </div>
                <Button 
                  variant="outline" 
                  className="bg-red-600/20 border-red-500/30 text-red-400 hover:bg-red-600/30"
                  data-testid="button-delete-account"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Eliminar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile": return renderProfileSection();
      case "business": return renderBusinessSection();
      case "notifications": return renderNotificationsSection();
      case "privacy": return renderPrivacySection();
      case "account": return renderAccountSection();
      default: return renderProfileSection();
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-white">Configuración</h1>
        <p className="text-white/50 text-sm">Gestiona tu perfil y preferencias</p>
      </div>

      {/* Section tabs — horizontal scroll on mobile, vertical sidebar on desktop */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 lg:hidden scrollbar-hide">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`whitespace-nowrap flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-colors flex-shrink-0
                ${activeSection === section.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
                }
              `}
              data-testid={`nav-${section.id}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {section.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Desktop sidebar nav */}
        <Card className="hidden lg:block lg:w-56 bg-white/5 backdrop-blur-xl border-white/10 h-fit">
          <CardContent className="p-3">
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 text-left text-sm ${
                      activeSection === section.id
                        ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                    data-testid={`nav-desktop-${section.id}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <Card className="flex-1 bg-white/10 backdrop-blur-xl border-white/20">
          <CardContent className="p-4 lg:p-6">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}