import unittest

from tripper import packet


class PacketTest(unittest.TestCase):
    def test_ping_matches_known_capture(self):
        # Vetor publicado: 03 00 ... 00 45 D9
        self.assertEqual(packet.ping(), bytes([0x03] + [0] * 17 + [0x45, 0xD9]))

    def test_nav_layout(self):
        p = packet.nav(icon=0x02, distance=350)
        self.assertEqual(len(p), 20)
        self.assertEqual(p[:6], bytes([0x10, 0x11, 0x02, 0x01, 0x5E, 0x01]))
        self.assertTrue(packet.is_valid(p))

    def test_corrupted_packet_is_invalid(self):
        p = bytearray(packet.ping())
        p[5] ^= 1
        self.assertFalse(packet.is_valid(bytes(p)))

    def test_pin(self):
        self.assertEqual(packet.pin("123456")[:7], b"\x20123456")
        with self.assertRaises(ValueError):
            packet.pin("12a456")


if __name__ == "__main__":
    unittest.main()
