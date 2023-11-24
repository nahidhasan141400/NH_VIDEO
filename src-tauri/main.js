const { app, window } = require("tauri/api");

// ...

app.init({
  // ...
  tauri: {
    // ...
    invokeSync: {
      "titleBar:create": () => {
        window.listen("titleBar:drag", (data) => {
          window.move({
            left: window.dimentions.left + data.payload.deltaX,
            top: window.dimentions.top + data.payload.deltaY,
          });
        });
      },
    },
  },
});

// ...
