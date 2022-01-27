export default [
  {
    question : `Не могу понять, нужно ли нам это сейчас?`,
    answer   : [
      {
        text   : `Задайте себе такие вопросы:`,
        styles : [`text`]
      }, {
        text   : `а) Для какого поста мне сейчас нужно было бы разработать «должностную папку»?`,
        styles : [`bold`]
      }, {
        text   : `б) Если бы у меня уже сейчас была хорошая «должностная папка» на _____________ (название должности), что бы мне это дало?`,
        styles : [`bold`]
      }, {
        items: [
          {
            text   : `Например:`,
            styles : [`text`, `italic`, `padding`]
          }, {
            text   : `"Нанял(-а) бы дополнительного сотрудника к существующему..."`,
            styles : [`text`, `italic`, `padding`]
          }, {
            text   : `"Заменил(-а) бы того кто в данный момент занимает эту должность, так как он меня не устраивает..."`,
            styles : [`text`, `italic`, `padding`]
          }, {
            text   : `"Наконец-то смогли бы нанять человека и передать ему __________ (такие-то) функции. Делегировать работу от других" - например, это может быть в том случае, когда компания была небольшая и один сотрудник успевал делать разноплановую работу, но компания подросла и часть работы он уже не успевает выполнять...`,
            styles : [`text`, `italic`, `padding`]
          }, 
        ]
      }, {
        text   : `в) Планируете ли вы развивать и расширять компанию?`,
        styles : [`bold`]
      }, {
        text   : `Здесь имеется ввиду не бездумное раздувание штата, а именно за счёт увеличения продаж и предоставления услуг, будет возникать потребность в новом (дополнительном) персонале.`,
        styles : [`text`]
      }, {
        text   : `а) Для какого поста мне сейчас нужно было бы разработать «должностную папку»?`,
        styles : [`bold`]
      }
      
    ]
  }
]