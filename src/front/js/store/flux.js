const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      user_email: "void",
      loged: false,
      registered: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      register: async (form) => {
        const store = getStore();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(form);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        await fetch(process.env.BACKEND_URL + "/user/signup", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      login: async (form) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(form);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        await fetch(process.env.BACKEND_URL + "/user/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            sessionStorage.setItem("token", result.token);
            setStore({ loged: true });
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      },
      getEmail: async () => {
        const token = sessionStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/user/get", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setStore({ user_email: result.email });
            console.log("successfull");
          })
          .catch((error) => console.log("error", error));
      },
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ loged: false });
      },
    },
  };
};

export default getState;
