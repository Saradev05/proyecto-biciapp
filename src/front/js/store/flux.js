const getState = ({ getStore, getAction, setStore }) => {
	return {
		store: {
			accessToken: ""
		},

		actions: {
			saveAccessToken: accessToken => {
				setStore({ accessToken: accessToken });
				localStorage.setItem("access_token", accessToken);
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
