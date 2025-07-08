// src/stores/categorias.js
import { defineStore } from 'pinia'
import { resolveAssetPath } from '../utils/basePath'

export const useCategoriasStore = defineStore('categorias', {
  state: () => ({
    lista: [
      {
        id: 'cumple',
        nombre: 'Cumpleaños',
        descripcion: 'Arreglos llenos de alegría para celebrar un nuevo año de vida.',
        imagen: resolveAssetPath('img/arreglos/cumple.png'),
        destacado: false
      },
      {
        id: 'romance',
        nombre: 'Amor y Romance',
        descripcion: 'Expresa tu amor con flores que dicen más que mil palabras.',
        imagen: resolveAssetPath('img/arreglos/romance.png'),
        destacado: true
      },
      {
        id: 'elegantes',
        nombre: 'Detalles Elegantes',
        descripcion: 'Arreglos sofisticados para dejar huella con clase.',
        imagen: resolveAssetPath('img/arreglos/elegantes.png'),
        destacado: true
      },
      {
        id: 'condolencias',
        nombre: 'Condolencias',
        descripcion: 'Homenajes florales para momentos de despedida y respeto.',
        imagen: resolveAssetPath('img/arreglos/condolencias.png'),
        destacado: true
      }
    ]
  })
})
