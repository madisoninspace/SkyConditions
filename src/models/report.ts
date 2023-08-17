import { Cloud } from './cloud.js';

/**
 * Represents a collection of METAR weather reports.
 */
export type Reports = Report[];

/**
 * Represents a METAR weather report.
 */
export interface Report {
    /**
     * The ID of the METAR report.
     */
    metar_id?: number
    /**
     * The ICAO ID of the station that reported the METAR.
     */
    icaoId?: string
    /**
     * The time the METAR was received by the system.
     */
    receiptTime?: string
    /**
     * The time the METAR was observed.
     */
    obsTime?: number
    /**
     * The time the METAR was reported.
     */
    reportTime?: string
    /**
     * Air temperature, in degrees Celsius.
     */
    temp?: number
    /**
     * Dewpoint temperature, in degrees Celsius.
     */
    dewp?: number
    /**
     * Wind direction, in degrees.
     */
    wdir?: number
    /**
     * Wind speed, in knots.
     */
    wspd?: number
    /**
     * Wind gust speed, in knots.
     */
    wgst?: number
    /**
     * Visibility, in statute miles.
     */
    visib?: number
    /**
     * Altimeter setting, in millibars.
     */
    altim?: number
    /**
     * Sea-level pressure, in millibars.
     */
    slp?: number
    /**
     * Quality control field.
     */
    qcField?: number
    /**
     * String representation of the METAR.
     */
    wxString?: string
    /**
     * Pressure tendency, in millibars.
     */
    presTend?: number
    /**
     * Maximum temperature in the last 6 hours, in degrees Celsius.
     */
    maxT?: number
    /**
     * Minimum temperature in the last 6 hours, in degrees Celsius.
     */
    minT?: number
    /**
     * Maximum temperature in the last 24 hours, in degrees Celsius.
     */
    maxT24?: number
    /**
     * Minimum temperature in the last 24 hours, in degrees Celsius.
     */
    minT24?: number
    /**
     * Precipitation in the last hour, in inches.
     */
    precip?: number
    /**
     * Precipitation in the last 3 hours, in inches.
     */
    pcp3hr?: number
    /**
     * Precipitation in the last 6 hours, in inches.
     */
    pcp6hr?: number
    /**
     * Precipitation in the last 24 hours, in inches.
     */
    pcp24hr?: number
    /**
     * Snow depth, in inches.
     */
    snow?: number
    /**
     * Vertical visibility, in feet.
     */
    vertVis?: number
    /**
     * METAR type.
     */
    metarType?: string
    /**
     * Raw METAR string.
     */
    rawOb?: string
    /**
     * Is this the most recent METAR for the station?
     * 1 = yes, 0 = no.
     */
    mostRecent?: number
    /**
     * Station latitude, in degrees.
     */
    lat?: number
    /**
     * Station longitude, in degrees.
     */
    lon?: number
    /**
     * Station elevation, in meters.
     */
    elev?: number
    prior?: number
    /**
     * Station name.
     */
    name?: string
    /**
     * Cloud coverage
     * @see Cloud
     */
    clouds?: Cloud[]
  }