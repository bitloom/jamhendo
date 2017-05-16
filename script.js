var mouse = { x: 0, y: 0 };

function flee()
{
  $('.shy').each(function(i, e)
  {
    var position = $(e).offset();
    var halfwidth = $(e).width() / 2;
    var halfheight = $(e).height() / 2;

    if (Math.abs(position.left + halfwidth - mouse.x) < halfwidth*5 && Math.abs(position.top + halfheight - mouse.y) < halfheight*5)
    {
      position.left = position.left + (position.left - mouse.x) / 15;

      if (position.left + halfwidth < halfwidth*2)
      {
        position.left = halfwidth*2;
      }

      if (position.left + halfwidth > $(window).width() - halfwidth*2)
      {
        position.left = $(window).width() - halfwidth*2;
      }

      position.top = position.top + (position.top - mouse.y) / 15;

      if (position.top + halfheight < halfheight*2)
      {
        position.top = halfheight*2;
      }

      if (position.top + halfheight > $(window).height() - halfheight*2)
      {
        position.top = $(window).height() - halfheight*2;
      }

      $(e).offset(position);
    }
  });
}

function update()
{
  flee();
}

$(document).mousemove(function(event)
{
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

setInterval(update, 1000 / 60);
