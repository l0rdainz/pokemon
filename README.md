- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided in the ID token
- Gated content. The `/profile,/pokemongenerator,/pokemonsearch` routes are not accessible without having first logged in

**Note**: This project is only compatible with vue 2

## Project setup

```bash
npm install
```

### Configuration

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, in `auth_config.json` replace the values within with your own Auth0 application credentials:

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>"
}
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

## Create a Free Auth0 Account

1.  Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2.  Use Google, GitHub or Microsoft Account to login.



## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.

