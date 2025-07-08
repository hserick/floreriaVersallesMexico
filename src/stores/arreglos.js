import { defineStore } from 'pinia'

export const useArreglosStore = defineStore('arreglos', {
  state: () => ({
    lista: [
      {
        id: 'cumple001',
        nombre: 'cumpleaños 001',
        descripcion: 'Un bouquet delicado de rosas pastel para expresar ternura y cariño.',
        imagen: '/src/img/arreglos/cumple/cumple001.png',
        categorias: ['cumple'],
        destacado: false
      },
      {
        id: 'cumple002',
        nombre: 'cumpleaños 002',
        descripcion: 'Un bouquet delicado de rosas pastel para expresar ternura y cariño.',
        imagen: '/src/img/arreglos/cumple/cumple002.jpg',
        categorias: ['cumple'],
        destacado: false
      },
      {
        id: 'cumple003',
        nombre: 'cumpleaños 003',
        descripcion: 'Un bouquet delicado de rosas pastel para expresar ternura y cariño.',
        imagen: '/src/img/arreglos/cumple/cumple003.jpg',
        categorias: ['cumple'],
        destacado: true
      },
      {
        id: 'cumple004',
        nombre: 'cumpleaños 004',
        descripcion: 'Un bouquet delicado de rosas pastel para expresar ternura y cariño.',
        imagen: '/src/img/arreglos/cumple/cumple004.jpg',
        categorias: ['cumple'],
        destacado: false
      },
      {
        id: 'romance001',
        nombre: 'Romance 001',
        descripcion: 'Flores llenas de color y luz para celebrar los momentos más felices.',
        imagen: '/src/img/arreglos/romance/romance001.jpg',
        categorias: ['romance', 'cumpleanos'],
        destacado: true
      },
      {
        id: 'romance002',
        nombre: 'Romance 002',
        descripcion: 'Flores llenas de color y luz para celebrar los momentos más felices.',
        imagen: '/src/img/arreglos/romance/romance002.jpg',
        categorias: ['romance'],
        destacado: true
      },
      {
        id: 'romance003',
        nombre: 'Romance 003',
        descripcion: 'Flores llenas de color y luz para celebrar los momentos más felices.',
        imagen: '/src/img/arreglos/romance/romance003.jpg',
        categorias: ['romance'],
        destacado: true
      },
      {
        id: 'romance004',
        nombre: 'Romance 004',
        descripcion: 'Flores llenas de color y luz para celebrar los momentos más felices.',
        imagen: '/src/img/arreglos/romance/romance004.jpg',
        categorias: ['romance'],
        destacado: true
      },
      {
        id: 'elegantes001',
        nombre: 'Elegantes 001',
        descripcion: 'Composición floral sobria para rendir homenaje a un ser querido.',
        imagen: '/src/img/arreglos/elegantes/elegantes001.jpg',
        categorias: [ 'elegantes'],
        destacado: true
      },
      {
        id: 'elegantes002',
        nombre: 'Elegantes 002',
        descripcion: 'Composición floral sobria para rendir homenaje a un ser querido.',
        imagen: '/src/img/arreglos/elegantes/elegantes002.jpg',
        categorias: [ 'elegantes'],
        destacado: true
      },
      {
        id: 'elegantes003',
        nombre: 'Elegantes 003',
        descripcion: 'Composición floral sobria para rendir homenaje a un ser querido.',
        imagen: '/src/img/arreglos/elegantes/elegantes003.jpg',
        categorias: [ 'elegantes'],
        destacado: true
      },
      {
        id: 'condolencias001',
        nombre: 'Condolencias 001',
        descripcion: 'Rosas rojas intensas que capturan el corazón.',
        imagen: '/src/img/arreglos/condolencias/condolencias001.jpg',
        categorias: ['condolencias'],
        destacado: true
      },
      {
        id: 'condolencias002',
        nombre: 'Condolencias 002',
        descripcion: 'Rosas rojas intensas que capturan el corazón.',
        imagen: '/src/img/arreglos/condolencias/condolencias002.jpg',
        categorias: ['condolencias'],
        destacado: true
      },
      {
        id: 'condolencias003',
        nombre: 'Condolencias 003',
        descripcion: 'Rosas rojas intensas que capturan el corazón.',
        imagen: '/src/img/arreglos/condolencias/condolencias003.jpg',
        categorias: ['condolencias'],
        destacado: true
      }
      // Puedes seguir agregando más con libertad ✨
    ]
  }),

  getters: {
    // Arreglos que pertenecen a una categoría específica
    porCategoria: (state) => (catId) =>
      state.lista.filter(a => a.categorias.includes(catId)),

    // Arreglos marcados como destacados
    destacados: (state) => state.lista.filter(a => a.destacado)
  },

  actions: {
    // En caso de necesitar una carga asíncrona en el futuro
    cargarArreglos() {
      // Si los trajeras desde un JSON externo o API
      // Aquí podrías actualizar this.lista
    }
  }
})
