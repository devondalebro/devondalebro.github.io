
const currentPage = window.location.pathname.split('/').pop();

const order = [
  'index.html',
  'piano.html',
  'bball.html',
  'study.html',
  'gym.html',
  'bed.html',
  'kitchen.html',
];

const dashboard = 'index.html';

document.getElementById('1').addEventListener('click', function() {
  // switch to the previous page
  window.location.href = getPreviousPage();
});

document.getElementById('2').addEventListener('click', function() {
  // switch to the dashboard
  window.location.href = dashboard;
});

document.getElementById('3').addEventListener('click', function() {
  // switch to the next page
  window.location.href = getNextPage();
});

function getPreviousPage() {
  const index = order.indexOf(currentPage);
  if (index === 0) {
    return order[order.length - 1];
  } else {
    return order[index - 1];
  }
}

function getNextPage() {
  const index = order.indexOf(currentPage);
  if (index === order.length - 1) {
    return order[0];
  } else {
    return order[index + 1];
  }
}
document.querySelectorAll('.toggle').forEach(element => {
  console.log(element);

  element.addEventListener('mouseover', function () {
    const currSrc = element.getAttribute('src');
    if (!currSrc.includes('_open')) {
      this.setAttribute('src', currSrc.replace(/(\.\w+)$/, '_open$1'));
    }
  });

  element.addEventListener('mouseout', function () {
    const currSrc = element.getAttribute('src');
    if (currSrc.includes('_open')) {
      this.setAttribute('src', currSrc.replace('_open', ''));
    }
  });
});
const tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
  for (let i = tooltip.length; i--;) {
    tooltip[i].style.left = e.pageX + 'px';
    tooltip[i].style.top = e.pageY + 'px';
  }
}
