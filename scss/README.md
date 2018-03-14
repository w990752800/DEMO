<h2>配置webstorm 的sass</h2>
<p>
   一。下载安装ruby  <br/>
    http://rubyinstaller.org/downloads/
</p>
<p>二。安装好ruby以后，打开cmd，输入gem install sass就可以安装SASS了</p>


三。OK以后，在webstorm里面选择本机ruby目录下bin目录里面的scss.bat文件（如果需要编译SASS文件则选择sass.bat）
  
四。下面的输出参数，可以根据自己的需要填写，下面列出的是一些常用的参数
  
  --style表示解析后的css是什么格式，如：--style compressed，有四种取值分别为：nested，expanded，compact，compressed.
  --sourcemap表示开启sourcemap调试。开启sourcemap调试后，会生成一个后缀名为.css.map文件。 webstorm是默认开启sourcemap的，所以可以不填写
  --debug-info表示开启debug信息，升级到3.3.0之后因为sourcemap更高级，这个debug-info就不太用了。