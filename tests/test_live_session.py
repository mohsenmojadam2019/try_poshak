from __future__ import annotations

from app.main import _LIVE_SESSIONS, _get_live_session, _store_live_session


def test_live_session_stores_garment_and_category() -> None:
    token = _store_live_session(b"garment-bytes", "tops")
    try:
        session = _get_live_session(token)
        assert session.garment_raw == b"garment-bytes"
        assert session.category == "tops"
    finally:
        _LIVE_SESSIONS.pop(token, None)
