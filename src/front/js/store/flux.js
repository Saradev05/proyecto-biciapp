const getState = ({ getStore, getAction, setStore }) => {
	return {
		store: {
			accessToken: "",
			isAdmin: null,
			forgotPasswordToken: ""
		},

		actions: {
			saveAccessToken: (accessToken, userAdmin) => {
				setStore({ accessToken: accessToken });
				localStorage.setItem("access_token", accessToken);

				setStore({ isAdmin: userAdmin });
				localStorage.setItem("isAdmin", userAdmin);
			},
			saveForgotPasswordToken: forgotPasswordToken => {
				setStore({ forgotPasswordToken: forgotPasswordToken });
				localStorage.setItem("forgotPasswordToken", forgotPasswordToken);
			},
			getAccessToken: () => {
				let store = getStore();
				if (store.accessToken) {
					return store.accessToken;
				} else {
					return localStorage.getItem("access_token");
				}
			},
			getForgotPasswordToken: () => {
				let store = getStore();
				if (store.forgotPasswordToken) {
					return store.forgotPasswordToken;
				} else {
					return localStorage.getItem("forgotPasswordToken");
				}
			}
		}
	};
};

export default getState;
