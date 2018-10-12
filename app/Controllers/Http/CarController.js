'use strict'

const CarModel = use('App/Models/Car')

class CarController {
  async index () {
    try {
      const data = await CarModel.all()
      return data
      
    } catch (error) {
      throw error
    }
  }

  async show ({ params }) {
    const { id } = params

    try {
      const data = await CarModel.findBy({ id })
      return data
      
    } catch (error) {
      throw error
    }
  }

  async store ({ request }) {
    const obj = request.all()

    try {
      const data = await CarModel.create(obj)
      return data
    } catch (error) {
      throw error
    }
  }

  async update ({ params, request }) {
    const { id } = params
    const obj = request.all()

    try {
      const data = await CarModel.findBy({ id })

      if (data) {
        data.merge(obj)
        await data.save()

        return data
      } else {
        throw new Error('Data not found')
      }
    } catch (error) {
      throw error
    }
  }

  async destroy ({ params }) {
    const { id } = params

    try {
      const data = await CarModel.findBy({ id })

      if (data) {
        await data.delete()
        return data
      } else {
        throw new Error('Data not found')
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = CarController
