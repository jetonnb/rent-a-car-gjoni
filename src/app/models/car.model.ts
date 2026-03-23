/** Modeli i makinës */
export interface Car {
  id: string;
  model: string;
  /** false nëse makina është shitur / hequr nga flota */
  isActive: boolean;
  /** True nëse makina ka një rezervim aktiv në këtë moment orar */
  isReserved?: boolean;
}
