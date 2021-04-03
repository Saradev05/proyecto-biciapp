const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: ""
		},

		actions: {
			saveAccessToken: accessToken => {
				setStore({ accessToken: accessToken });
			},
			getAccessToken: () => {
				let store = getStore();
				return store.accessToken;
			}
		}
	};
};

export default getState;
