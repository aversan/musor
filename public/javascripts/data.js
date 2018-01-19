$(document).ready(function() {
  const serviceItemHTML = (title) => {
    return `
      <div class="service-item vertical-align">
        <div class="service-item-image cover-background" style="background-image: url(../images/service-item-image.jpg)"></div>
        <div class="vertical-align-middle">
          <div class="h3 service-item-title mb-0">${title}</div>
          <div class="service-item-hint mt-1">(если у заказчика есть необходимость в грузчиках)</div>
        </div>
      </div>
    `;
  };

  const phoneBoxHTML = () => {
    return `
      <div class="phone-box">
        <span class="phone-box-icon">
          <i class="icon icon-sprite icon-phone-white"></i>
        </span>
        <span class="phone-box-number text-truncate font-weight-bold"><a class="phone-box-link text-dark" href="tel:+74993807682">+7 (499) 380-76-82</a></span>
      </div>
    `
  };

  const $feature = $('#feature');
  const titles = [
    `<div>Текст 1 Услуги грузчиков оплачиваются дополнительно 8 кубов
      <span class="font-weight-bold">от 3000 руб.</span>;</div><div>20, 27 кубов <span class="font-weight-bold">от 7000 руб.</span></div>`,
    `<div>Текст 2 Услуги грузчиков оплачиваются дополнительно 8 кубов
      <span class="font-weight-bold">от 3000 руб.</span>;</div><div>20, 27 кубов <span class="font-weight-bold">от 7000 руб.</span></div>`,
    `<div>Текст 3 Услуги грузчиков оплачиваются дополнительно 8 кубов
      <span class="font-weight-bold">от 3000 руб.</span>;</div><div>20, 27 кубов <span class="font-weight-bold">от 7000 руб.</span></div>`,
    `<div>Текст 4 Услуги грузчиков оплачиваются дополнительно 8 кубов
      <span class="font-weight-bold">от 3000 руб.</span>;</div><div>20, 27 кубов <span class="font-weight-bold">от 7000 руб.</span></div>`,
    `<div>Текст 5 Услуги грузчиков оплачиваются дополнительно 8 кубов
      <span class="font-weight-bold">от 3000 руб.</span>;</div><div>20, 27 кубов <span class="font-weight-bold">от 7000 руб.</span></div>`
  ];
  $feature.find('.service-item').each(function(index){
    const $item = $(this);
    const $title = $item.find('.service-item-title');
    $title.empty().html(titles[index]);
  });

  const calculatorHTML = `
    <div class="calculator-container" id="calculator">
      <div class="panel panel-default calculator-panel">
        <div class="calculator-panel-girl-part-1"></div>
        <div class="calculator-panel-girl-part-2"></div>
        <div class="panel-heading text-center calculator-panel-heading vertical-align">
          <div class="vertical-align-middle">
            <div class="h2 text-white text-truncate">Расчет стоимости</div>
          </div>
        </div>
        <div class="panel-body calculator-panel-body">
          <div class="calculator-panel-inner mx-auto">
            <form data-toggle="validator" role="form" id="raschet" novalidate="true">
              <div class="form-group calculator-panel-form-group pt-2">
                <label class="control-label text-uppercase font-weight-bold calculator-panel-control-label" for="okrug">Выберите округ (или город):</label>
                <select class="custom-select d-block full-width" name="okrug" id="okrug" required>
                </select>
              </div>
              <div class="form-group calculator-panel-form-group">
                <label class="control-label text-uppercase font-weight-bold calculator-panel-control-label" for="city">Выберите город (или округ):</label>
                <select class="custom-select d-block full-width" name="city" id="city">
                </select>
              </div>
              <div class="row calculator-panel-row">
                <div class="col-xs-6 calculator-panel-col">
                  <div class="form-group calculator-panel-form-group">
                    <label class="control-label text-uppercase font-weight-bold calculator-panel-control-label" for="objem">Выберите объем:</label>
                    <select class="custom-select d-block full-width" name="objem" id="objem">
                      <option name="3000" value="1">8 m3</option>
                      <option name="7000" value="2">20 m3</option>
                      <option name="7000" value="3">27 m3</option>
                    </select>
                  </div>
                </div>
                <div class="col-xs-6 calculator-panel-col">
                  <div class="form-group calculator-panel-form-group">
                    <label class="control-label text-uppercase font-weight-bold calculator-panel-control-label-label" for="kolvo">Выберите кол-во:</label>
                    <select class="custom-select d-block full-width" name="kolvo" id="kolvo">
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group calculator-panel-form-group">
                <label class="custom-control custom-checkbox calculator-panel-checkbox">
                  <input type="checkbox" class="custom-control-input" id="pogruzka" name="pogruzka">
                  <span class="custom-control-indicator"></span>
                  <span class="custom-control-description">Погрузка (цена появляется под кнопкой ниже)</span>
                </label>
              </div>
              <div class="text-center">
                <button class="btn btn-lg btn-success text-uppercase calculator-panel-btn" type="button" id="result">Рассчитать стоимость</button>
                <div class="h3 text-truncate mt-3 mb-0 mb-2" id="stoimost"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="panel-hr"></div>
        <div class="panel-body calculator-panel-body">
          <div class="calculator-panel-inner mx-auto">
            ${phoneBoxHTML()}
          </div>
        </div>
      </div>
    </div>
  `;
  $("#calc_wrap").html(calculatorHTML);

  const city = [
    ['Город Подмосковья'],
    ['Подольск', 4600, 11600, 16400],
    ['Истра', 5100, 12100, 16900],
    ['Ногинск', 5000, 12000, 16800],
    ['Звенигород', 5300, 12300, 17100],
    ['Одинцово', 5300, 12300, 17100],
    ['Лобня', 5300, 12300, 17100],
    ['Красногорск', 5300, 12300, 17100],
    ['Раменское', 4700, 11700, 16500],
    ['Химки', 5300, 12300, 17100],
    ['Пушкино', 5000, 12000, 16800],
    ['Сергиев Посад', 4700, 11700, 16500],
    ['Дмитров', 4500, 11500, 16300],
    ['Солнечногорск', 4800, 11800, 16600],
    ['Чехов', 5200, 12200, 17000],
    ['Апрелевка', 4900, 11900, 16700],
    ['Домодедово', 4600, 11600, 16400],
    ['Клин', 5300, 12300, 17100],
    ['Балашиха', 4600, 11600, 16400],
    ['Люберцы', 5100, 12100, 16900],
    ['Щёлково', 5200, 12200, 17000],
    ['Наро-Фоминск', 4800, 11800, 16600],
    ['Королёв', 4700, 11700, 16500],
    ['Серпухов', 4800, 11800, 16600],
    ['Видное', 4800, 11800, 16600],
    ['Мытищи', 5200, 12200, 17000],
    ['Электросталь', 5300, 12300, 17100],
    ['Долгопрудный', 4500, 11500, 16300],
    ['Жуковский', 5200, 12200, 17000],
    ['Кубинка', 5200, 12200, 17000],
    ['Бронницы', 5000, 12000, 16800],
    ['Коломна', 5000, 12000, 16800],
    ['Можайск', 5000, 12000, 16800],
    ['Орехово-Зуево', 4900, 11900, 16700],
    ['Ступино', 4900, 11900, 16700],
    ['Волоколамск', 5000, 12000, 16800],
    ['Егорьевск', 5200, 12200, 17000],
    ['Воскресенск', 4800, 11800, 16600],
    ['Голицыно', 4500, 11500, 16300],
    ['Фрязино', 4500, 11500, 16300],
    ['Руза', 4600, 11600, 16400],
    ['Дедовск', 4500, 11500, 16300],
    ['Кашира', 4800, 11800, 16600],
    ['Лосино-Петровский', 4700, 11700, 16500],
    ['Реутов', 5100, 12100, 16900],
    ['Луховицы', 4900, 11900, 16700],
    ['Павловский Посад', 4800, 11800, 16600],
    ['Лыткарино', 5200, 12200, 17000],
    ['Хотьково', 4500, 11500, 16300],
    ['Яхрома', 4800, 11800, 16600],
    ['Ивантеевка', 4700, 11700, 16500],
    ['Краснознаменск', 5100, 12100, 16900]
  ];
  const tip_container = ["8 м<sup>3</sup> / 4 т", "20 м<sup>3</sup> / 12 т", "27 м<sup>3</sup> / 16 т"]
  const okrug = [
    ['Округ Москвы'],
    ['Центр и Садовое кольцо', 4900, 11300, 11800],
    ['Центр ТТК и Садовое Кольцо', 4300, 10700, 11300],
    ['(ЮВАО) Юго-Восточный округ', 4100, 10200, 10700],
    ['(ЮАО) Южный округ', 4100, 10200, 10700],
    ['(ЮЗАО) Юго-Западный округ', 4300, 10700, 11300],
    ['(САО) Северный округ', 4300, 10700, 11300],
    ['(СВАО) Северо-Восточный округ', 4300, 10700, 11300],
    ['(ВАО) Восточный округ', 4300, 10700, 11300],
    ['(ЗАО) Западный округ', 4300, 10700, 11300],
    ['(СЗАО) Северо-Западный округ', 4300, 10700, 11300]
  ];

  // garbage-collection-table-1

  $('.js-garbage-collection-table-1').each(function() {
    const $container = $(this);
    const city_array = $container.data("city");
    const okrug_array = $container.data("okrug");
    const container_array = $container.data("konteiner");
    const tableHTML = `
      <table class='table table-striped-2 table-space garbage-collection-table garbage-collection-table-1 mb-0 table-responsive'>
        <thead>
          <tr>
            <td class='font-weight-bold text-truncate'></td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;

    $container.append(tableHTML);

    for (let i = 0; i < container_array.length; i++) {
      $container.find('thead td:last').after(`<td class='font-weight-bold text-truncate'>${tip_container[container_array[i]]}</td>`);
    }

    for (let i = 0; i < city_array.length; i++) {
      let content = `<tr><td class="text-truncate">${city[city_array[i]][0]}</td>`;
      for (let k = 1; k < container_array.length + 1; k++) {
        content += `<td class="td-price text-truncate">${city[city_array[i]][k]} р.</td>`;
      }
      $container.find('tbody').append(content);
    }

    for (let i = 0; i < okrug_array.length; i++) {
      let content = `<tr><td class="text-truncate">${okrug[okrug_array[i]][0]}</td>`;
      for (let k = 1; k < container_array.length + 1; k++) {
        content += `<td class="td-price text-truncate">${okrug[okrug_array[i]][k]} р.</td>`;
      }
      $container.find('tbody').append(content);
    }
  });

  // garbage-collection-table-2

  $('.js-garbage-collection-table-2').each(function() {
    const $container = $(this);
    const city_array = $container.data("city");
    const okrug_array = $container.data("okrug");
    const container_array = $container.data("konteiner");
    const tableHTML = `
      <table class='table table-striped-2 table-space garbage-collection-table garbage-collection-table-2 table-responsive mb-0'>
        <thead>
          <tr>
            <td class='font-weight-bold text-truncate'></td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;

    $container.append(tableHTML);

    for (let i = 0; i < city_array.length; i++) {
      $container.find('thead td:last').after(`<td class='font-weight-bold text-uppercase'>${city[city_array[i]][0]}</td>`);
    }

    for (let i = 0; i < okrug_array.length; i++) {
      $container.find('thead td:last').after(`<td class='font-weight-bold text-uppercase'>${okrug[okrug_array[i]][0]}</td>`);
    }

    for (let i = 0; i < container_array.length; i++) {
      let content = `<tr><td class='text-truncate'>${tip_container[container_array[i]]}</td>`;
      for (let k = 0; k < city_array.length; k++) {
        content += `<td class='text-truncate td-price'>${city[city_array[k]][i + 1]}  р.</td>`;
      }
      for (let k = 0; k < okrug_array.length; k++) {
        content += `<td class='text-truncate td-price'>${okrug[okrug_array[k]][i + 1]} р.</td>`;
      }
      $container.find('tbody').append(content);
    }
  });

  // charact-tables

  $('.js-charact-table-1').each(function() {
    const $container = $(this);
    const tableHTML = `
      <div class="row">
        <div class="col-xs-12 col-sm-6 charact-panel-col-left">
          <div class="h2 mb-4 pb-1">Параметры 8 м<sup>3</sup></div>
          <table class="table table-striped charact-table mb-4">
            <tbody>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Длина</th>
                <td class="text-truncate text-uppercase font-weight-bold">3500 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Ширина</th>
                <td class="text-truncate text-uppercase font-weight-bold">2000 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Высота</th>
                <td class="text-truncate text-uppercase font-weight-bold">1500 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Вес</th>
                <td class="text-truncate text-uppercase font-weight-bold">0,5 т.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Грузоподъемность</th>
                <td class="text-truncate text-uppercase font-weight-bold">4 т.</td>
              </tr>
            </tbody>
          </table>
          <div class="сharact-panel-footer text-center text-sm-left">
            <div class="h3 font-weight-normal mb-4 mt-1">
              <span>Стоимость:</span>
              <span class="text-truncate font-weight-bold">от 3 700 руб.</span>
            </div>
            <div class="py-2">
              ${phoneBoxHTML()}
            </div>
          </div>
        </div>
      </div>
    `;

    $container.append(tableHTML);
  });

  $('.js-charact-table-2').each(function() {
    const $container = $(this);
    const tableHTML = `
      <div class="row">
        <div class="col-xs-12 col-sm-6 charact-panel-col-left">
          <div class="h2 mb-4 pb-1">Параметры 20 м<sup>3</sup></div>
          <table class="table table-striped charact-table mb-4">
            <tbody>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Длина</th>
                <td class="text-truncate text-uppercase font-weight-bold">6200 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Ширина</th>
                <td class="text-truncate text-uppercase font-weight-bold">2400 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Высота</th>
                <td class="text-truncate text-uppercase font-weight-bold">1900 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Вес</th>
                <td class="text-truncate text-uppercase font-weight-bold">2 т.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Грузоподъемность</th>
                <td class="text-truncate text-uppercase font-weight-bold">12 т.</td>
              </tr>
            </tbody>
          </table>
          <div class="сharact-panel-footer text-center text-sm-left">
            <div class="h3 font-weight-normal mb-4 mt-1">
              <span>Стоимость:</span>
              <span class="text-truncate font-weight-bold">от 9 500 руб.</span>
            </div>
            <div class="py-2">
              ${phoneBoxHTML()}
            </div>
          </div>
        </div>
      </div>
    `;

    $container.append(tableHTML);
  });

  $('.js-charact-table-3').each(function() {
    const $container = $(this);
    const tableHTML = `
      <div class="row">
        <div class="col-xs-12 col-sm-6 charact-panel-col-left">
          <div class="h2 mb-4 pb-1">Параметры 27 м<sup>3</sup></div>
          <table class="table table-striped charact-table mb-4">
            <tbody>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Длина</th>
                <td class="text-truncate text-uppercase font-weight-bold">6200 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Ширина</th>
                <td class="text-truncate text-uppercase font-weight-bold">2500 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Высота</th>
                <td class="text-truncate text-uppercase font-weight-bold">2000 мм.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Вес</th>
                <td class="text-truncate text-uppercase font-weight-bold">2,2 т.</td>
              </tr>
              <tr>
                <th class="text-truncate text-uppercase font-weight-normal" scope="row">Грузоподъемность</th>
                <td class="text-truncate text-uppercase font-weight-bold">16 т.</td>
              </tr>
            </tbody>
          </table>
          <div class="сharact-panel-footer text-center text-sm-left">
            <div class="h3 font-weight-normal mb-4 mt-1">
              <span>Стоимость:</span>
              <span class="text-truncate font-weight-bold">от 10 500 руб.</span>
            </div>
            <div class="py-2">
              ${phoneBoxHTML()}
            </div>
          </div>
        </div>
      </div>
    `;

    $container.append(tableHTML);
  });

  let child;
  const $city = $('#city');
  const $okrug = $('#okrug');
  const $kolvo = $('#kolvo');
  const $objem = $('#objem');
  const $pogruzka = $('#pogruzka');
  const $result = $('#result');
  const $stoimost = $('#stoimost');
  const $raschet = $('#raschet');

  for (let i = 0; i < city.length; i++) {
    if (i === 0) {
      $city.append(`<option value=''>${city[i][0]}</option>`);
    } else {
      $city.append(`<option value='${i}'>${city[i][0]}</option>`);
    }
  }

  for (let i = 0; i < okrug.length; i++) {
    if (i === 0) {
      $okrug.append(`<option value=''>${okrug[i][0]}</option>`);
    } else {
      $okrug.append(`<option value='${i}'>${okrug[i][0]}</option>`);
    }
  }

  for (let i = 1; i < 11; i++) {
    $kolvo.append(`<option value='${i}'>${i}</option>`);
  }

  $result.click(function() {
    let cena;
    let key;

    $raschet.validator('validate');

    if ($raschet.validator('validate').has('.has-error').length === 0) {
      if (child === 1) {
        key = city[$city.val()];
        if ($pogruzka.is(':checked')) {
          cena = key[$objem.val()] * $kolvo.val() + parseInt($objem.find('option:selected').attr('name'), 10) * $kolvo.val();
        } else {
          cena = key[$objem.val()] * $kolvo.val();
        }
      } else if (child === 2) {
        key = okrug[$okrug.val()];
        if ($pogruzka.is(":checked")) {
          cena = key[$objem.val()] * $kolvo.val() + parseInt($objem.find('option:selected').attr('name'), 10) * $kolvo.val();
        } else {
          cena = key[$objem.val()] * $kolvo.val();
        }
      }
      $stoimost.empty().html(`<span class="font-weright-normal">Стоимость: </span><span class="text-nowrap font-weight-bold">${cena} руб.</span>`);
      $('html, body').animate({
        scrollTop: ($("#calculator").offset().top + 345)
      }, 300);
    }
  });

  $city.change(function() {
    if ($city.val() !== 0) {
      $okrug[0].selectedIndex = 0;
      $okrug.removeAttr("required");
      $city.prop('required', true);
      child = 1;
    }
  });

  $okrug.change(function() {
    if ($okrug.val() !== 0) {
      $city[0].selectedIndex = 0;
      $city.removeAttr("required");
      $okrug.prop('required', true);
      child = 2;
    }
  });
});
