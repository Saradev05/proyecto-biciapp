const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			accessToken: ""
		},

		actions: {
			saveAccessToken: accessToken => {
				setStore({ accessToken: accessToken });
			}
		}
	};
};

export default getState;
