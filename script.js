window.addEventListener(
  'load',
  () => {

    setTimeout(() => {

      document
      .getElementById(
        'loading'
      )
      .style.opacity = '0';

      setTimeout(() => {

        document
        .getElementById(
          'loading'
        )
        .style.display =
        'none';

      },500);

    },1500);

  }
);

const light =
document.getElementById(
  'cursor-light'
);

document.addEventListener(
  'mousemove',
  (e)=>{

    light.style.left =
      e.clientX + 'px';

    light.style.top =
      e.clientY + 'px';
  }
);

const elements =
document.querySelectorAll(
  '.hero-content,.card'
);

const observer =
new IntersectionObserver(
(entries)=>{

  entries.forEach(
    entry=>{

      if(
        entry.isIntersecting
      ){

        entry.target.style.opacity =
        '1';

        entry.target.style.transform =
        'translateY(0)';
      }
    }
  );

},{
  threshold:0.2
});

elements.forEach(el=>{

  el.style.opacity='0';

  el.style.transform =
  'translateY(80px)';

  el.style.transition =
  '1s';

  observer.observe(el);
});