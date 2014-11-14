PhotoGalleryDemo01
==================

相册演示一-HTML5

这是一个相册应用，用于演示照片显示的一些效果。供照片演示使用。
主体效果采用Impress.js ，其它还有一些演示效果如：
星球大战字幕效果;
纵向滚屏效果(horizontal marquee);
横向滚屏效果(vertical marquee);
多6面体效果;
多宫格效果;

实现上主要使用HTML5来做展示，后台使用node.js做服务。


部署：
0. prepare node/git env

1. clone code from github:
git clone https://github.com/archcra/PhotoGalleryDemo01.git

2. copy files under photo folders  from dev env to  target deploy env

3. npm install

Patch ejs　-　Add dynamic include (from variable) (*)


4. run: startup.sh

5. visit host:port(such as http://localhost:5312/) to verify



* Patch EJS　-　Add dynamic include (from variable) 
EJS手工修改(node_modules/ejs/lib/ejs.js)：

约第155行，修改后如下所示：
/*
      if (0 == js.trim().indexOf('include')) {
        var name = js.trim().slice(7).trim();
        if (!filename) throw new Error('filename option is required for includes');
        var path = resolveInclude(name, filename);
        include = read(path, 'utf8');
        include = exports.parse(include, { filename: path, _with: false, open: open, close: close, compileDebug: compileDebug });
        buf += "' + (function(){" + include + "})() + '";
        js = '';
      }
*/

if (0 == js.trim().indexOf('include')) {
    var name = js.trim().slice(7).trim();
    if (!filename) throw new Error('filename option is required for includes');
    // If it is not path, but variable name (Added)
    console.log('name', name)
    if(options[name])
         var path = resolveInclude(options[name], filename);
    else
         var path = resolveInclude(name, filename);
    include = read(path, 'utf8');
    include = exports.parse(include, options); // Added transfer whole options
    buf += "' + (function(){" + include + "})() + '";
    js = '';
  }

Reference: https://github.com/tj/ejs/issues/93

