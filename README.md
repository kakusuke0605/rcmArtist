spotyfyのauthorization_codeのapp.jsをnode app.jsで起動して、ブラウザlocalhost:8888にアクセスしてアクセスキーを取得

src/index.jsにアクセスキーを入力し、npm run buildでコンパイルののち、functionsでnpm run emulators:startでエミュレーターを起動

localhost:5000にアクセス

デプロイする場合はfirebase deploy --only hostings
