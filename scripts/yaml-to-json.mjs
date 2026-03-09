#!/usr/bin/env node
/**
 * Converts decision-tree.yaml to frontend/src/assets/decision-tree.json
 * Run: node scripts/yaml-to-json.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import yaml from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const yamlContent = readFileSync(join(root, 'decision-tree.yaml'), 'utf8')
const data = yaml.load(yamlContent)

const outputPath = join(root, 'frontend', 'src', 'assets', 'decision-tree.json')
writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8')

console.log(`✅ Converted decision-tree.yaml → ${outputPath}`)
