
// export interface VehicleFormData {
//     name: string;
//     brand: string;
//     plateNumber: string;
//     transmission: string;
//     category: string;
// }

// export interface Vehicle {
//     id: string;
//     name: string;
//     brand: string;
//     plateNumber: string;
//     transmission: string;
//     category: {
//         name: string;
//     };
// }

// export interface VehicleProps {
//     id: string | number;
//     name: string;
//     brand: string;
//     plateNumber: string;
//     transmission: string;
//     category?: {
//         name: string;
//     };
// }

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  plateNumber: string;
  transmission: string;
  category?: {
    name: string;
  };
}
export interface VehicleFormData {
  name: string;
  brand: string;
  plateNumber: string;
  transmission: string;
  categoryId: string;
}

export interface AuthState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}