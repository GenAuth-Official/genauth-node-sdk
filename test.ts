import { AuthenticationClient, ManagementClient } from "./src";
import { SigninByCredentialsDto } from "./src/models";

const xx = new ManagementClient({
  accessKeyId: "66ac93c8c0a6ca455f032073",
  accessKeySecret: "cdf1c73526af07587e5b4e5fa86ad2a4",
  host: "https://core.ub-dev.lixpng.top",
});

const yy = new AuthenticationClient({
  appHost: "https://core.ub-dev.lixpng.top",
  appId: "66b4939bc36aba0e5255f6ef",
  appSecret: "ecff39678ce756072459df89f37194e6",
});

function main() {
  xx.listUsers({}).then((res) => {
    console.log(res);
  });

  yy.signInByCredentials({
    connection: SigninByCredentialsDto.connection.PASSWORD,
    passwordPayload: {
      email: "test@test.com",
      password: "test@test.com",
    },
  }).then(console.log);
}

main();
