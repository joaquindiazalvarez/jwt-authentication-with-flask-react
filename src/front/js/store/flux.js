const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      loged: false,
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
      register: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacade-reactflaskh-aohgolkzijh.ws-us43.gitpod.io/user/signup",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      login: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-4geeksacade-reactflaskh-aohgolkzijh.ws-us43.gitpod.io/user/login",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) =>
            console.log(window.sessionStorage.setItem(token, result.token))
          )
          .catch((error) => console.log("error", error));
      },
      loginShuffle: () => {
        const store = getStore();
        if (store.loged === true) {
          setStore((store.loged = false));
        } else {
          store.loged = true;
        }
      },
      loginTrue: () => {
        const store = getStore();
        setStore({ login: true });
      },
      loginFalse: () => {
        const store = getStore();
        setStore({ login: false });
      },
    },
  };
};

export default getState;
