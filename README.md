### 使用 jsDeliver + GitHub 当免费的 CDN

将文件上传到 GitHub 上即可使用 CDN 访问资源文件。请求格式为：

    https://cdn.jsdelivr.net/gh/<user>/<repo>[@version]/<file>
    https://fastly.jsdelivr.net/gh/<user>/<repo>[@version]/<file>

- user: GitHub 用户，必填
- repo: 仓库名，必填
- version: 版本号，非必填（版本号是为了区分新旧资源，如果不使用版本号，将会直接引用最新资源）
- file: 资源文件

例子：

- 加载 jQuery v3.6.4

https://cdn.jsdelivr.net/gh/jquery/jquery@3.6.4/dist/jquery.min.js

- 使用版本范围而不是特定版本

https://cdn.jsdelivr.net/gh/jquery/jquery@3.6/dist/jquery.min.js

https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js

- 省略版本以获取最新版本（不要在生产环境中使用）

https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js

- 将`.min`添加到任何`JS/CSS`文件中以获取压缩版本，如果不存在，将会自动生成

https://cdn.jsdelivr.net/gh/jquery/jquery@3.6.4/src/core.min.js

- 在末尾添加`/`以获取资源目录列表

https://cdn.jsdelivr.net/gh/jquery/jquery/
