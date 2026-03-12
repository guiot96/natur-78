import { useState, useCallback, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight, ArrowLeft, Check, User, Mail, Lock, Building2, Briefcase,
  FileText, MapPin, Phone, Globe, Users, Star, Sparkles, Instagram,
  Facebook, Linkedin, Twitter, Utensils, Mountain, Tent, Bus, Laptop,
  Hotel, TreePine, Compass
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface TypeformRegistrationProps {
  onSuccess?: (user: any) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
  businessType: string;
  description: string;
  city: string;
  phone: string;
  website: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  employeeCount: string;
  mainServices: string[];
  festivalExpectations: string;
}

const businessTypes = [
  { id: "tourism", label: "Turismo", icon: Compass, color: "from-emerald-500 to-green-600" },
  { id: "hotel", label: "Alojamiento", icon: Hotel, color: "from-blue-500 to-indigo-600" },
  { id: "restaurant", label: "Gastronomía", icon: Utensils, color: "from-orange-500 to-red-500" },
  { id: "transport", label: "Transporte", icon: Bus, color: "from-purple-500 to-violet-600" },
  { id: "agency", label: "Agencia", icon: Briefcase, color: "from-yellow-500 to-amber-600" },
  { id: "technology", label: "Tecnología", icon: Laptop, color: "from-cyan-500 to-blue-500" },
  { id: "adventure", label: "Aventura", icon: Mountain, color: "from-rose-500 to-pink-600" },
  { id: "ecoturismo", label: "Ecoturismo", icon: TreePine, color: "from-lime-500 to-green-500" },
  { id: "camping", label: "Camping", icon: Tent, color: "from-amber-600 to-yellow-500" },
];

const employeeOptions = [
  { value: "1-5", label: "1-5 empleados" },
  { value: "6-20", label: "6-20 empleados" },
  { value: "21-50", label: "21-50 empleados" },
  { value: "51-100", label: "51-100 empleados" },
  { value: "100+", label: "Más de 100" },
];

const serviceOptions = [
  "Tours guiados", "Alojamiento", "Gastronomía local", "Transporte turístico",
  "Actividades de aventura", "Experiencias culturales", "Ecoturismo",
  "Bienestar y spa", "Eventos corporativos", "Fotografía profesional",
  "Artesanía local", "Educación ambiental",
];

const cities = [
  "Bogotá", "Medellín", "Cali", "Cartagena", "Santa Marta",
  "Manizales", "Pereira", "Bucaramanga", "Barranquilla", "Armenia",
];

const TOTAL_STEPS = 13;

const TypeformRegistration: React.FC<TypeformRegistrationProps> = ({ onSuccess }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    businessType: "",
    description: "",
    city: "Bogotá",
    phone: "",
    website: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    employeeCount: "",
    mainServices: [],
    festivalExpectations: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
      if (textareaRef.current) textareaRef.current.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, [step]);

  const update = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getCityCoordinates = (city: string) => {
    const coords: Record<string, { lat: number; lng: number }> = {
      Bogotá: { lat: 4.6097, lng: -74.0817 },
      Medellín: { lat: 6.2442, lng: -75.5812 },
      Cali: { lat: 3.4516, lng: -76.532 },
      Cartagena: { lat: 10.391, lng: -75.4794 },
      "Santa Marta": { lat: 11.2408, lng: -74.199 },
      Manizales: { lat: 5.0703, lng: -75.5138 },
      Pereira: { lat: 4.8133, lng: -75.6961 },
      Bucaramanga: { lat: 7.1254, lng: -73.1198 },
      Barranquilla: { lat: 10.9685, lng: -74.7813 },
      Armenia: { lat: 4.5339, lng: -75.6811 },
    };
    return coords[city] || coords["Bogotá"];
  };

  const registrationMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const coordinates = getCityCoordinates(data.city);
      return await apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          companyName: data.companyName,
          businessType: data.businessType,
          companyDescription: data.description,
          city: data.city,
          country: "Colombia",
          coordinates,
          phone: data.phone,
          website: data.website,
          role: "empresa",
          userType: "empresa",
          registrationComplete: true,
          profileCompletion: 100,
          employeeCount: data.employeeCount,
          mainServices: data.mainServices,
          festivalExpectations: data.festivalExpectations,
          socialMedia: {
            instagram: data.instagram,
            facebook: data.facebook,
            linkedin: data.linkedin,
            twitter: data.twitter,
          },
          socialLinks: {
            instagram: data.instagram,
            facebook: data.facebook,
            linkedin: data.linkedin,
            twitter: data.twitter,
          },
        }),
      });
    },
    onSuccess: (response) => {
      setShowSuccess(true);
      if (onSuccess) {
        setTimeout(() => onSuccess(response.user), 4000);
      } else {
        setTimeout(() => {
          window.location.href = "/portal-empresas";
        }, 4000);
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error en el registro",
        description: error.message || "Ha ocurrido un error. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const canAdvance = useCallback((): boolean => {
    switch (step) {
      case 0: return formData.firstName.length >= 2 && formData.lastName.length >= 2;
      case 1: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 2: return formData.password.length >= 8;
      case 3: return formData.companyName.length >= 2;
      case 4: return formData.businessType !== "";
      case 5: return formData.description.length >= 10;
      case 6: return formData.city !== "";
      case 7: return true;
      case 8: return true;
      case 9: return formData.employeeCount !== "";
      case 10: return formData.mainServices.length > 0;
      case 11: return true;
      default: return true;
    }
  }, [step, formData]);

  const goNext = useCallback(() => {
    if (!canAdvance()) return;
    if (step === TOTAL_STEPS - 1) {
      registrationMutation.mutate(formData);
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, [step, canAdvance, formData, registrationMutation]);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSuccess) return;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        goNext();
      }
      if (e.key === "Backspace" && step > 0) {
        const target = e.target as HTMLElement;
        const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
        const hasValue = isInput && (target as HTMLInputElement).value.length > 0;
        if (!hasValue) {
          e.preventDefault();
          goBack();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goBack, showSuccess, step]);

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      mainServices: prev.mainServices.includes(service)
        ? prev.mainServices.filter((s) => s !== service)
        : [...prev.mainServices, service],
    }));
  };

  const slideVariants = {
    enter: (dir: number) => ({ y: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  if (showSuccess) {
    return <SuccessScreen userName={formData.firstName} companyName={formData.companyName} />;
  }

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const steps: JSX.Element[] = [
    <StepWrapper key="name" title="¿Cómo te llamas?" subtitle="Queremos conocerte mejor">
      <div className="space-y-4 w-full max-w-md">
        <Input
          ref={inputRef}
          value={formData.firstName}
          onChange={(e) => update("firstName", e.target.value)}
          placeholder="Tu nombre"
          className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20"
        />
        <Input
          value={formData.lastName}
          onChange={(e) => update("lastName", e.target.value)}
          placeholder="Tu apellido"
          className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:ring-green-400/20"
        />
      </div>
    </StepWrapper>,

    <StepWrapper key="email" title="¿Cuál es tu email?" subtitle="Lo usarás para iniciar sesión" icon={<Mail className="w-8 h-8 text-green-400" />}>
      <Input
        ref={inputRef}
        type="email"
        value={formData.email}
        onChange={(e) => update("email", e.target.value)}
        placeholder="tu@email.com"
        className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md focus:border-green-400 focus:ring-green-400/20"
      />
    </StepWrapper>,

    <StepWrapper key="password" title="Crea una contraseña segura" subtitle="Mínimo 8 caracteres" icon={<Lock className="w-8 h-8 text-green-400" />}>
      <Input
        ref={inputRef}
        type="password"
        value={formData.password}
        onChange={(e) => update("password", e.target.value)}
        placeholder="••••••••"
        className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md focus:border-green-400 focus:ring-green-400/20"
      />
      {formData.password.length > 0 && formData.password.length < 8 && (
        <p className="text-amber-400 text-sm mt-2">Faltan {8 - formData.password.length} caracteres</p>
      )}
      {formData.password.length >= 8 && (
        <p className="text-green-400 text-sm mt-2 flex items-center gap-1"><Check className="w-4 h-4" /> Contraseña válida</p>
      )}
    </StepWrapper>,

    <StepWrapper key="company" title="¿Cómo se llama tu empresa?" subtitle="El nombre que verán otros en el portal" icon={<Building2 className="w-8 h-8 text-green-400" />}>
      <Input
        ref={inputRef}
        value={formData.companyName}
        onChange={(e) => update("companyName", e.target.value)}
        placeholder="Ej. EcoTours Colombia"
        className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md focus:border-green-400 focus:ring-green-400/20"
      />
    </StepWrapper>,

    <StepWrapper key="businessType" title="¿Qué tipo de negocio tienes?" subtitle="Selecciona la categoría que mejor describe tu empresa">
      <div className="grid grid-cols-3 gap-3 max-w-lg">
        {businessTypes.map((bt) => {
          const Icon = bt.icon;
          const selected = formData.businessType === bt.id;
          return (
            <button
              key={bt.id}
              onClick={() => update("businessType", bt.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 ${
                selected
                  ? "border-green-400 bg-green-400/20 scale-105 shadow-lg shadow-green-400/20"
                  : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bt.color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${selected ? "text-green-400" : "text-white/80"}`}>{bt.label}</span>
            </button>
          );
        })}
      </div>
    </StepWrapper>,

    <StepWrapper key="description" title="Describe tu empresa" subtitle="Cuéntanos qué hacen y qué los hace especiales" icon={<FileText className="w-8 h-8 text-green-400" />}>
      <Textarea
        ref={textareaRef}
        value={formData.description}
        onChange={(e) => update("description", e.target.value)}
        placeholder="Somos una empresa dedicada a..."
        rows={4}
        className="text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md resize-none focus:border-green-400 focus:ring-green-400/20"
      />
    </StepWrapper>,

    <StepWrapper key="city" title="¿En qué ciudad están ubicados?" subtitle="Esto nos ayuda a mostrarlos en el mapa" icon={<MapPin className="w-8 h-8 text-green-400" />}>
      <div className="grid grid-cols-2 gap-3 max-w-md">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => update("city", c)}
            className={`p-3 rounded-xl border-2 text-left transition-all duration-300 ${
              formData.city === c
                ? "border-green-400 bg-green-400/20 text-green-400"
                : "border-white/10 bg-white/5 text-white/80 hover:border-white/30"
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            {c}
          </button>
        ))}
      </div>
    </StepWrapper>,

    <StepWrapper key="phone" title="Teléfono de contacto" subtitle="Opcional - Para que otros puedan contactarte" icon={<Phone className="w-8 h-8 text-green-400" />}>
      <Input
        ref={inputRef}
        value={formData.phone}
        onChange={(e) => update("phone", e.target.value)}
        placeholder="+57 300 123 4567"
        className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md focus:border-green-400 focus:ring-green-400/20"
      />
    </StepWrapper>,

    <StepWrapper key="web" title="Tu presencia online" subtitle="Comparte tu sitio web y redes sociales (opcional)" icon={<Globe className="w-8 h-8 text-green-400" />}>
      <div className="space-y-3 w-full max-w-md">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-white/60 flex-shrink-0" />
          <Input value={formData.website} onChange={(e) => update("website", e.target.value)} placeholder="https://miempresa.com" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400" />
        </div>
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-pink-400 flex-shrink-0" />
          <Input value={formData.instagram} onChange={(e) => update("instagram", e.target.value)} placeholder="@miempresa" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400" />
        </div>
        <div className="flex items-center gap-3">
          <Facebook className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <Input value={formData.facebook} onChange={(e) => update("facebook", e.target.value)} placeholder="facebook.com/miempresa" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400" />
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-sky-400 flex-shrink-0" />
          <Input value={formData.linkedin} onChange={(e) => update("linkedin", e.target.value)} placeholder="linkedin.com/company/..." className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400" />
        </div>
        <div className="flex items-center gap-3">
          <Twitter className="w-5 h-5 text-white/60 flex-shrink-0" />
          <Input value={formData.twitter} onChange={(e) => update("twitter", e.target.value)} placeholder="@miempresa" className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-green-400" />
        </div>
      </div>
    </StepWrapper>,

    <StepWrapper key="employees" title="¿Cuántos empleados tiene tu empresa?" subtitle="Selecciona el rango más cercano" icon={<Users className="w-8 h-8 text-green-400" />}>
      <div className="flex flex-col gap-3 max-w-md w-full">
        {employeeOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => update("employeeCount", opt.value)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
              formData.employeeCount === opt.value
                ? "border-green-400 bg-green-400/20 text-green-400"
                : "border-white/10 bg-white/5 text-white/80 hover:border-white/30"
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            {opt.label}
          </button>
        ))}
      </div>
    </StepWrapper>,

    <StepWrapper key="services" title="¿Qué servicios principales ofreces?" subtitle="Selecciona todos los que apliquen" icon={<Star className="w-8 h-8 text-green-400" />}>
      <div className="flex flex-wrap gap-2 max-w-lg justify-center">
        {serviceOptions.map((svc) => (
          <button
            key={svc}
            onClick={() => toggleService(svc)}
            className={`px-4 py-2 rounded-full border-2 text-sm transition-all duration-300 ${
              formData.mainServices.includes(svc)
                ? "border-green-400 bg-green-400/20 text-green-400"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
            }`}
          >
            {formData.mainServices.includes(svc) && <Check className="w-3 h-3 inline mr-1" />}
            {svc}
          </button>
        ))}
      </div>
    </StepWrapper>,

    <StepWrapper key="expectations" title="¿Qué esperas del Festival NATUR?" subtitle="Cuéntanos tus expectativas y metas (opcional)" icon={<Sparkles className="w-8 h-8 text-yellow-400" />}>
      <Textarea
        ref={textareaRef}
        value={formData.festivalExpectations}
        onChange={(e) => update("festivalExpectations", e.target.value)}
        placeholder="Me gustaría conectar con otros empresarios, mostrar mis servicios..."
        rows={4}
        className="text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-md resize-none focus:border-green-400 focus:ring-green-400/20"
      />
    </StepWrapper>,

    <StepWrapper key="confirm" title="¡Todo listo para registrarte!" subtitle="Revisa tu información y crea tu cuenta">
      <div className="max-w-md w-full space-y-3">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
          <div className="flex justify-between"><span className="text-white/60">Nombre</span><span className="text-white">{formData.firstName} {formData.lastName}</span></div>
          <div className="flex justify-between"><span className="text-white/60">Email</span><span className="text-white">{formData.email}</span></div>
          <div className="flex justify-between"><span className="text-white/60">Empresa</span><span className="text-white">{formData.companyName}</span></div>
          <div className="flex justify-between"><span className="text-white/60">Tipo</span><span className="text-white">{businessTypes.find(b => b.id === formData.businessType)?.label}</span></div>
          <div className="flex justify-between"><span className="text-white/60">Ciudad</span><span className="text-white">{formData.city}</span></div>
          {formData.employeeCount && <div className="flex justify-between"><span className="text-white/60">Empleados</span><span className="text-white">{formData.employeeCount}</span></div>}
          {formData.mainServices.length > 0 && <div className="flex justify-between"><span className="text-white/60">Servicios</span><span className="text-white text-right text-sm">{formData.mainServices.join(", ")}</span></div>}
        </div>
        <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4">
          <h4 className="text-green-400 font-medium mb-2">Se activarán:</h4>
          <ul className="text-green-200 text-sm space-y-1">
            <li>✅ Tarjeta en el directorio</li>
            <li>📍 Marcador en el mapa interactivo</li>
            <li>💬 Sistema de mensajería</li>
            <li>✨ Creación de experiencias</li>
            <li>👤 Perfil empresarial</li>
          </ul>
        </div>
      </div>
    </StepWrapper>,
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0d1a0f] via-[#1a2e1a] to-[#0d1a0f] flex flex-col z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 pt-6">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-sm font-medium">Paso {step + 1} de {TOTAL_STEPS}</span>
            <span className="text-white/60 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 overflow-y-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full flex justify-center"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 px-6 pb-6">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div>
            {step > 0 && (
              <Button
                variant="ghost"
                onClick={goBack}
                className="text-white/60 hover:text-white hover:bg-white/10 gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Atrás
              </Button>
            )}
          </div>

          <Button
            onClick={goNext}
            disabled={!canAdvance() || registrationMutation.isPending}
            className={`gap-2 px-8 h-12 rounded-full text-base font-semibold transition-all duration-300 ${
              canAdvance()
                ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/25"
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }`}
          >
            {registrationMutation.isPending ? (
              <span className="flex items-center gap-2">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                Creando cuenta...
              </span>
            ) : step === TOTAL_STEPS - 1 ? (
              <>Crear cuenta <Check className="w-5 h-5" /></>
            ) : (
              <>Continuar <ArrowRight className="w-5 h-5" /></>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

function StepWrapper({ title, subtitle, icon, children }: { title: string; subtitle: string; icon?: JSX.Element; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-2xl px-4">
      {icon && <div className="mb-4">{icon}</div>}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-white/50 mb-8 text-base sm:text-lg">{subtitle}</p>
      {children}
    </div>
  );
}

function SuccessScreen({ userName, companyName }: { userName: string; companyName: string }) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; size: number; delay: number }>>([]);

  useEffect(() => {
    const colors = ["#4ade80", "#facc15", "#34d399", "#a3e635", "#22d3ee", "#f472b6"];
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 4,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0d1a0f] via-[#1a2e1a] to-[#0d1a0f] flex items-center justify-center z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0.5],
            y: [0, -200 - Math.random() * 300],
            x: (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: p.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-8 max-w-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
        >
          <Check className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          ¡Bienvenido, {userName}!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60 text-lg mb-8"
        >
          <span className="text-green-400 font-semibold">{companyName}</span> ya es parte del ecosistema NATUR
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left space-y-3"
        >
          <p className="text-green-400 font-semibold text-sm mb-3">FUNCIONALIDADES DESBLOQUEADAS</p>
          {[
            { icon: "📍", text: "Tu empresa en el mapa interactivo" },
            { icon: "👥", text: "Directorio de contactos empresariales" },
            { icon: "💬", text: "Mensajería directa con empresarios" },
            { icon: "✨", text: "Creación de experiencias turísticas" },
            { icon: "📊", text: "Panel de estadísticas y métricas" },
            { icon: "⚙️", text: "Configuración completa del perfil" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-white/80 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-white/40 text-sm mt-6"
        >
          Entrando al portal en unos segundos...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default TypeformRegistration;
