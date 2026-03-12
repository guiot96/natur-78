import { motion } from "framer-motion";

export function PortalSkeleton() {
  return (
    <div className="min-h-screen bg-[#0d1a0f] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="w-12 h-12 mx-auto mb-4 bg-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30">
          <span className="text-green-400 font-gasoek text-xl font-bold">N</span>
        </div>
        <div className="space-y-3 w-64">
          <div className="h-3 bg-white/10 rounded-full animate-pulse" />
          <div className="h-3 bg-white/10 rounded-full animate-pulse w-3/4 mx-auto" />
          <div className="h-3 bg-white/10 rounded-full animate-pulse w-1/2 mx-auto" />
        </div>
        <p className="text-white/40 text-sm mt-4">Cargando...</p>
      </motion.div>
    </div>
  );
}
