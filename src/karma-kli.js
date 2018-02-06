function Plugin() {

}

Plugin.prototype.transform = content => {
  return content.replace('true', 'false');
};

function createPreprocesor(/* config.basePath */ basePath, kliPlugin) {
    // console.log(basePath, kliPlugin);
    // console.log(arguments);

    return (content, file, done) => {
        // console.log(content, file);
        done(null, kliPlugin.transform(content));
    }
}

module.exports = {
    kliPlugin: ['type', Plugin],
    'preprocessor:kli': ['factory', createPreprocesor],
};