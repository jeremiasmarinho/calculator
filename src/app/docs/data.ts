export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "AC", label: "Acre", color: "black" },
  { value: "AL", label: "Alagoas", color: "black" },
  { value: "AP", label: "Amapá", color: "black" },
  { value: "AM", label: "Amazonas", color: "black" },
  { value: "BA", label: "Bahia", color: "black" },
  { value: "CE", label: "Ceará", color: "black" },
  { value: "DF", label: "Distrito Federal", color: "black" },
  { value: "ES", label: "Espírito Santo", color: "black" },
  { value: "GO", label: "Goías", color: "black" },
  { value: "MA", label: "Maranhão", color: "black" },
  { value: "MT", label: "Mato Grosso", color: "black" },
  { value: "MS", label: "Mato Grosso do Sul", color: "black" },
  { value: "MG", label: "Minas Gerais", color: "black" },
  { value: "PA", label: "Pará", color: "black" },
  { value: "PB", label: "Paraíba", color: "black" },
  { value: "PR", label: "Paraná", color: "black" },
  { value: "PE", label: "Pernambuco", color: "black" },
  { value: "PI", label: "Piauí", color: "black" },
  { value: "RJ", label: "Rio de Janeiro", color: "black" },
  { value: "RN", label: "Rio Grande do Norte", color: "black" },
  { value: "RS", label: "Rio Grande do Sul", color: "black" },
  { value: "RO", label: "Rondônia", color: "black" },
  { value: "RR", label: "Roraíma", color: "black" },
  { value: "SC", label: "Santa Catarina", color: "black" },
  { value: "SP", label: "São Paulo", color: "black" },
  { value: "SE", label: "Sergipe", color: "black" },
  { value: "TO", label: "Tocantins", color: "black" },
];
