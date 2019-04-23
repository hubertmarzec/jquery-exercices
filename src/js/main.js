$(function() {


  const fetchData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())



  function renderTable(data, $target) {
    if (!data) {
      return;
    }
    const first = data[0];

    const head = Object.keys(first).map(key => `<th>${key}</th>`).join('');
    const renderValue = value => typeof value === 'object' ? 'object' : value;

    const body = data.map(item => {
      return `<tr>${Object.values(item).map(value => `<td>${renderValue(value)}</td>` ).join('')}</tr>`;
    }).join('');
    
    const html = `
      <table>
        <thead>
          ${head}
        </thead>
        <tbody>
          ${body}
        </thead>
      </table>
    `;
    $target.html(html);
  }

  $(".js-dynamic").each(function() {
    const type = $(this).data('company');
    const $target = $(this);

    fetchData(type)
      .then(data => {
        renderTable(data, $target)
      })
  })


})
