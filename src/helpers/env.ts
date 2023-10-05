export default function env(name: string) {
    const _ = process.env[name];

    if (!_) throw new Error("No value for env variable : " + name);

    return _;
}
