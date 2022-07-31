const debug = process.env.NODE_ENV !== "production";

const prefix = !debug ? "/hyper" : "";

export { prefix };
