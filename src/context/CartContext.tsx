import React, { createContext, useContext, useState } from 'react';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  tendencia?: boolean;
  stock?: number;
  categoriaId?: number;
}

interface CartItem {
  producto: Producto;
  cantidad: number;
}

interface CartContextType {
  items: CartItem[];
  agregarAlCarrito: (producto: Producto, cantidad: number) => void;
  actualizarCantidad: (productoId: number, cantidad: number) => void;
  eliminarDelCarrito: (productoId: number) => void;
  obtenerCantidadTotal: () => number;
  obtenerTotal: () => number;
  limpiarCarrito: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const agregarAlCarrito = (producto: Producto, cantidad: number) => {
    setItems((prevItems) => {
      const existente = prevItems.find((item) => item.producto.id === producto.id);
      if (existente) {
        return prevItems.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prevItems, { producto, cantidad }];
    });
  };

  const actualizarCantidad = (productoId: number, cantidad: number) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(productoId);
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.producto.id === productoId ? { ...item, cantidad } : item
        )
      );
    }
  };

  const eliminarDelCarrito = (productoId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.producto.id !== productoId));
  };

  const obtenerCantidadTotal = () => {
    return items.reduce((total, item) => total + item.cantidad, 0);
  };

  const obtenerTotal = () => {
    return items.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  };

  const limpiarCarrito = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
        obtenerCantidadTotal,
        obtenerTotal,
        limpiarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
