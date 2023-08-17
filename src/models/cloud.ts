/**
 * Represents a cloud object with its cover and base properties.
 */
export interface Cloud {
    /**
     * The amount of sky covered by the cloud.
     */
    cover: string
    /**
     * The height of the cloud base above the surface of the Earth, in feet.
     */
    base: number
}
