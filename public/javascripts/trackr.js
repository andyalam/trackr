(function() {

  var config = {

  };
  var points = {};
  // Start tracking time here
  var timeStart = new Date();

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE

    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    var timeElapsed = new Date() - timeStart;
    var wHeight = $(window).height();
    var wWidth =$(window).width();

    var point = {
      x: event.pageX,
      y: event.pageY,
      time: timeElapsed,
    };

    if (points[wWidth + "x" + wHeight]) {
      points[wWidth + "x" + wHeight].push(point);
    } else {
      points[wWidth + "x" + wHeight] = [point];
    }


    // Add a dot to follow the cursor
    dot = document.createElement('div');
    dot.className = "dot";
    dot.style.left = event.pageX + "px";
    dot.style.top = event.pageY + "px";
    document.body.appendChild(dot);
  }

  setTimeout(function() {
    var data = {
      mouseData: points
    }
    console.log('data', data);
    $.ajax({
      type: "POST",
      url: "/api/",
      data: JSON.stringify(data),
      success: function(res) {
        console.log(res);
      },
      error: function(res) {
        console.log('err', res);
      }
    })
  }, 1000);

})();
