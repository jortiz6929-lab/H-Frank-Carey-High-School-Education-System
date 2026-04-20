self.__uv$config = {
    prefix: '/uv/service/',
    bare: [
        "https://tomp.app/",
        "https://bare.benroxy.com/",
        "https://uv.student-resources.workers.dev/bare/",
        "https://v6.bare.unblocked.lol/bare/"
    ],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
