
class List {
  items = []

  constructor () {
    let goods = this.fetchGoods()

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map(cur => {
      return new GoodItem(cur)
    })

    // поштучно добавляем объекты в наш список
    // ссылка на статью про spread оператор ниже
    this.items.push(...goods)

    // запускаем рендер
    this.render()
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/ 
  fetchGoods () {
    return [
      { name: 'Shirt', price: 150 },
      { name: 'Socks', price: 15 },
      { name: 'Jacket', price: 50 },
      { name: 'Shoes', price: 1500 },
    ]
  }

  render () {
    // В this.items у нас хранятся объекты GoodItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this.items.forEach(good => {
      good.render()
    })
  }
}

class GoodItem {
  name = ''
  price = 0

  // в аргументах применена деструктуризация (ссылка на статью ниже)
  constructor ({ name, price }) {
    this.name = name
    this.price = price
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement('div')
      block.innerHTML = `Товар: ${this.name} = ${this.price}`

      // помещаем созданный блок на страницу
      placeToRender.appendChild(block)
    }
  }
}

const ListInstance = new List()

