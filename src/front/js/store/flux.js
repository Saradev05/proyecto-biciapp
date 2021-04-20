const getState = ({ getStore, getAction, setStore }) => {
	return {
		store: {
			accessToken: "",
			isAdmin: false
		},

		actions: {
			saveAccessToken: (accessToken, userAdmin) => {
				setStore({ accessToken: accessToken });
				localStorage.setItem("access_token", accessToken);

				setStore({ isAdmin: userAdmin });
				localStorage.setItem("isAdmin", userAdmin);
			},
			getAccessToken: () => {
				let store = getStore();
				if (store.accessToken) {
					return store.accessToken;
				} else {
					return localStorage.getItem("access_token");
				}
			}
		}
	};
};

export default getState;
