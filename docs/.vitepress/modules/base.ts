export default process.env.READTHEDOCS_CANONICAL_URL ? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "") : ""
