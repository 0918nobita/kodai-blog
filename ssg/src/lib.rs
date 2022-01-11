pub mod index;
pub mod search;

use anyhow::{bail, Context};
use tantivy::schema::Field;

pub enum SubCommand {
    Index(String),
    Search(String),
    Render(String),
}

impl SubCommand {
    pub fn parse_args(args: &[String]) -> anyhow::Result<SubCommand> {
        let first = args.first().context("subcommand is not specified")?;
        if first == "index" {
            let second = args.get(1).context("path is not specified")?;
            Ok(SubCommand::Index(second.clone()))
        } else if first == "search" {
            let second = args.get(1).context("query is not specified")?;
            Ok(SubCommand::Search(second.clone()))
        } else if first == "render" {
            let second = args
                .get(1)
                .context("destination directory is not specified")?;
            Ok(SubCommand::Render(second.clone()))
        } else {
            bail!("invalid subcommand")
        }
    }
}

pub struct Fields {
    pub slug: Field,
    pub title: Field,
    pub body: Field,
}
