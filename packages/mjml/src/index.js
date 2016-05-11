import { registerMJElement } from 'mjml-core'
import Button from 'mjml-button'
import Column from 'mjml-column'
import Container from 'mjml-container'
import Divider from 'mjml-divider'
import Html from 'mjml-html'
import Image from 'mjml-image'
import Invoice from 'mjml-invoice'
import InvoiceItem from 'mjml-invoice-item'
import List from 'mjml-list'
import Location from 'mjml-location'
import Raw from 'mjml-raw'
import Section from 'mjml-section'
import Social from 'mjml-social'
import Spacer from 'mjml-spacer'
import Table from 'mjml-table'
import Text from 'mjml-text'

[ Container,
  Button,
  Column,
  Divider,
  Html,
  Image,
  Invoice,
  InvoiceItem,
  List,
  Location,
  Raw,
  Section,
  Social,
  Spacer,
  Table,
  Text ].map(registerMJElement)

export * from 'mjml-core'