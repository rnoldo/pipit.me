+++
title = "andrej karpathy on AI era software/app"
date = "2026-02-22"
description = "Verbatim transcript of three Andrej Karpathy X posts on AI-era software: bespoke apps, app store obsolescence, and agent-native services."
slug = "andrej-karpathy-on-ai-era-software-app"
+++

## Post 1

Very interested in what the coming era of highly bespoke software might look like. Example from this morning - I've become a bit loosy goosy with my cardio recently so I decided to do a more srs, regimented experiment to try to lower my Resting Heart Rate from 50 -> 45, over experiment duration of 8 weeks. The primary way to do this is to aspire to a certain sum total minute goals in Zone 2 cardio and 1 HIIT/week. 1 hour later I vibe coded this super custom dashboard for this very specific experiment that shows me how I'm tracking. Claude had to reverse engineer the Woodway treadmill cloud API to pull raw data, process, filter, debug it and create a web UI frontend to track the experiment. It wasn't a fully smooth experience and I had to notice and ask to fix bugs e.g. it screwed up metric vs. imperial system units and it screwed up on the calendar matching up days to dates etc. But I still feel like the overall direction is clear: 1) There will never be (and shouldn't be) a specific app on the app store for this kind of thing. I shouldn't have to look for, download and use some kind of a "Cardio experiment tracker", when this thing is ~300 lines of code that an LLM agent will give you in seconds. The idea of an "app store" of a long tail of discrete set of apps you choose from feels somehow wrong and outdated when LLM agents can improvise the app on the spot and just for you. 2) Second, the industry has to reconfigure into a set of services of sensors and actuators with agent native ergonomics. My Woodway treadmill is a sensor - it turns physical state into digital knowledge. It shouldn't maintain some human-readable frontend and my LLM agent shouldn't have to reverse engineer it, it should be an API/CLI easily usable by my agent. I'm a little bit disappointed (and my timelines are correspondingly slower) with how slowly this progression is happening in the industry overall. 99% of products/services still don't have an AI-native CLI yet. 99% of products/services maintain .html/.css docs like I won't immediately look for how to copy paste the whole thing to my agent to get something done. They give you a list of instructions on a webpage to open this or that url and click here or there to do a thing. In 2026. What am I a computer? You do it. Or have my agent do it. So anyway today I am impressed that this random thing took 1 hour (it would have been ~10 hours 2 years ago). But what excites me more is thinking through how this really should have been 1 minute tops. What has to be in place so that it would be 1 minute? So that I could simply say "Hi can you help me track my cardio over the next 8 weeks", and after a very brief Q&A the app would be up. The AI would already have a lot personal context, it would gather the extra needed data, it would reference and search related skill libraries, and maintain all my little apps/automations. TLDR the "app store" of a set of discrete apps that you choose from is an increasingly outdated concept all by itself. The future are services of AI-native sensors & actuators orchestrated via LLM glue into highly custom, ephemeral apps. It's just not here yet.
https://x.com/karpathy/status/2024583544157458452

![Cardio experiment dashboard](/images/notes/HBjB6bhbUAA8_mZ.jpeg)

## Post 2

I think this group of reactions are still fundamentally rooted in a scarcity mindset of software. 2 years ago AI was botching autocomplete, today it is almost one shotting browsers and C compilers. Where is it in 2 more? 10? 20? Software so insanely cheap and abundant that discrete “apps” make no sense in today’s sense. It’s just code paths that assemble for a hyper specific purpose, just to get deleted after a single execution. You don’t need to know anything or exercise any creative direction over this happening on your behalf. If today’s software is castles of bricks of code, this is more like boiling soup of code. I don’t know that it fully plays out this way and it will be mixed and incremental and etc but in principle it could get really weird.
https://x.com/karpathy/status/2024933972523057610

## Post 3

The higher tiers of AI psychosis are incompatible with today’s “App Store”
https://x.com/karpathy/status/2024936435816796165

