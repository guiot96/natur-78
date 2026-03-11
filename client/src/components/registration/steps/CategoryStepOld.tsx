
import React from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, UserPlus, Rocket } from "lucide-react";
import { CategoryType } from "../RegistrationForm";

interface CategoryStepProps {
  onCategorySelect: (category: CategoryType) => void;
}

const CategoryStep = ({ onCategorySelect }: CategoryStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-gasoek tracking-wide" style={{ color: '#f5e03a' }}>
          ¿QUÉ TIPO DE EMPRESA TIENES?
        </h2>
        <p className="text-lg font-medium" style={{ color: '#f5e03a' }}>
          Selecciona la categoría que mejor describe tu organización
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div 
          className="p-6 border-2 border-[#f5e03a] hover:border-[#f5e03a] bg-transparent hover:bg-[#f5e03a]/5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm"
          onClick={() => onCategorySelect("sponsor")}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-4 border-2 border-[#f5e03a] rounded-full" style={{ backgroundColor: '#f5e03a' }}>
              <Briefcase className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold text-xl" style={{ color: '#f5e03a' }}>
              Empresa de Turismo Sostenible
            </h3>
            <p className="text-base font-medium" style={{ color: '#f5e03a' }}>
              Ofrezco experiencias de ecoturismo, turismo rural o sostenible
            </p>
          </div>
        </div>
        
        <div 
          className="p-6 border-2 border-[#f5e03a] hover:border-[#f5e03a] bg-transparent hover:bg-[#f5e03a]/5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm"
          onClick={() => onCategorySelect("ecosystem")}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-4 border-2 border-[#f5e03a] rounded-full" style={{ backgroundColor: '#f5e03a' }}>
              <UserPlus className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold text-xl" style={{ color: '#f5e03a' }}>
              Organización del Ecosistema
            </h3>
            <p className="text-base font-medium" style={{ color: '#f5e03a' }}>
              NGO, agencia, operador o institución en turismo regenerativo
            </p>
          </div>
        </div>
        
        <div 
          className="p-6 border-2 border-[#f5e03a] hover:border-[#f5e03a] bg-transparent hover:bg-[#f5e03a]/5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm"
          onClick={() => onCategorySelect("startup")}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-4 border-2 border-[#f5e03a] rounded-full" style={{ backgroundColor: '#f5e03a' }}>
              <Rocket className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold text-xl" style={{ color: '#f5e03a' }}>
              Startup o Emprendimiento
            </h3>
            <p className="text-base font-medium" style={{ color: '#f5e03a' }}>
              Tengo una startup innovadora con componente sostenible en turismo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryStep;
