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

export interface FlavourOption {
  readonly value: string;
  readonly label: string;
  readonly rating: string;
}

export const flavourOptions: readonly FlavourOption[] = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
];

export interface StateOption {
  readonly value: string;
  readonly label: string;
}

export const stateOptions: readonly StateOption[] = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export const optionLength = [
  { value: 1, label: "general" },
  {
    value: 2,
    label:
      "Evil is the moment when I lack the strength to be true to the Good that compels me.",
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
  },
];

export const dogOptions = [
  { id: 1, label: "Chihuahua" },
  { id: 2, label: "Bulldog" },
  { id: 3, label: "Dachshund" },
  { id: 4, label: "Akita" },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[] | readonly FlavourOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Colours",
    options: colourOptions,
  },
  {
    label: "Flavours",
    options: flavourOptions,
  },
];
