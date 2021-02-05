自分用メモ

1. spotyfyのauthorization_codeのapp.jsをnode app.jsで起動して、

   ブラウザlocalhost:8888にアクセスしてアクセスキーを取得

1. src/index.jsにアクセスキーを入力し、npm run buildでコンパイルののち、
  
   functionsでnpm run emulators:startでエミュレーターを起動

1. localhost:5000にアクセス

1. デプロイする場合はfirebase deploy --only hostings
