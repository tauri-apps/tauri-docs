---
title: "type.Result"
---

# Type Definition [tauri](/docs/api/rust/tauri/index.html)::​[Result](/docs/api/rust/tauri/)

    type Result<T, E = Error> = Result<T, E>;

Alias for a Result with error type anyhow::Error. `Result<T, Error>`

This is a reasonable return type to use throughout your application but also for `fn main`; if you do, failures will be printed along with any \[context]\[Context] and a backtrace if one was captured.

`anyhow::Result` may be used with one _or_ two type parameters.

    use anyhow::Result;

    fn demo1() -> Result<T> {...}
               // ^ equivalent to std::result::Result<T, anyhow::Error>

    fn demo2() -> Result<T, OtherError> {...}
               // ^ equivalent to std::result::Result<T, OtherError>

# [Example](/docs/api/rust/tauri/about:blank#example)

    use anyhow::Result;

    fn main() -> Result<()> {
        let config = std::fs::read_to_string("cluster.json")?;
        let map: ClusterMap = serde_json::from_str(&config)?;
        println!("cluster info: {:#?}", map);
        Ok(())
    }
